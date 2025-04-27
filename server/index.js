import express from "express";
import cors from "cors";
import multer from "multer";
import { Queue } from "bullmq";
import fetch from "node-fetch"; // or native fetch if you're using Node 18+
import { OllamaEmbeddings } from "@langchain/community/embeddings/ollama";
import { QdrantVectorStore } from "@langchain/community/vectorstores/qdrant";
import OpenAI from "openai";

// for answering from pdf if you want use open ai, default ollama is working

// const client = new OpenAI({
//   apiKey:
//     "your open ai key",
// });

const queue = new Queue("file-upload-queue", {
  connection: {
    host: "localhost",
    port: "6379",
  },
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

const app = express();
// this will allow us to use json data in our requests
app.use(cors());

// checking if the server is running
app.get("/", (req, res) => {
  return res.json({ status: "Hello World!" });
});

app.post("/upload/pdf", upload.single("pdf"), async (req, res) => {
  await queue.add(
    "file-ready",
    JSON.stringify({
      filename: req.file.originalname,
      destination: req.file.destination,
      path: req.file.path,
    })
  );
  return res.json({ message: "File uploaded successfully!" });
});

app.get("/chat", async (req, res) => {
  const userQuery = req.query.message;

  const embeddings = new OllamaEmbeddings({
    model: "nomic-embed-text",
    baseUrl: "http://localhost:11434",
  });
  const vectorStore = await QdrantVectorStore.fromExistingCollection(
    embeddings,
    {
      url: "http://localhost:6333",
      collectionName: "pdf-uplodes",
    }
  );
  const ret = vectorStore.asRetriever({
    k: 2,
  });
  const result = await ret.invoke(userQuery);

  // SYSTEM PROMPT
  const SYSTEM_PROMPT = `
You are a helpful AI Assistant who answers the user query based on the available context from a PDF file.

Context:
${JSON.stringify(result)}
`;

  // Compose prompt (like OpenAI chat format)
  const fullPrompt = `${SYSTEM_PROMPT}\n\nUser Question:\n${userQuery}\n\nAnswer:`;

  // Send to Ollama (local server)
  const ollamaResponse = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "tinyllama", // or 'gemma:2b', 'phi3', etc.
      prompt: fullPrompt,
      stream: false,
    }),
  });

  const data = await ollamaResponse.json();

  return res.json({
    message: data.response,
    docs: result,
  });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
