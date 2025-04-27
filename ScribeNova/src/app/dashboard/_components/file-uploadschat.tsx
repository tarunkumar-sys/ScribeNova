"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as React from "react";

//  this is for backend...
interface Doc {
  pageContent?: string;
  metdata?: {
    log?: {
      pageNumber?: number;
    };
    source?: string;
  };
}

interface IMessage {
  role: "assistant" | "user";
  content?: string;
  documents?: Doc[];
}

const ChatComponent: React.FC = () => {
  const [message, setMessage] = React.useState<string>("");
  const [messages, setMessages] = React.useState<IMessage[]>([]);

  const handleSendChatMessage = async () => {
    setMessages((prev) => [...prev, { role: "user", content: message }]);
    const res = await fetch(`http://localhost:8000/chat?message=${message}`);
    const data = await res.json();
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: data?.message, documents: data?.docs },
    ]);
  };

  return (
    <div className="relative h-full rounded-md">
      {/* 🛠️ Made parent relative */}
      <div className="h-[27rem] rounded-md bg-red-300 overflow-y-auto p-4 space-y-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`break-words p-2 rounded-lg ${
              message.role === "user"
                ? "bg-blue-500 text-white self-end ml-auto"
                : "bg-gray-200 text-black"
            }`}
          >
            <pre className="whitespace-pre-wrap break-words">
              {JSON.stringify(message, null, 2)}
            </pre>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 rounded-sm p-2 w-[90%] max-w-3xl">
        {/* 🛠️ Changed fixed to absolute */}
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          className="text-black placeholder:text-gray-500"
        />
        <Button onClick={handleSendChatMessage} disabled={!message.trim()}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatComponent;
