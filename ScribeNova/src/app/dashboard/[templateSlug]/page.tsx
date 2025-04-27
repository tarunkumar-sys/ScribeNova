"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contentTemplates } from "@/lib/content-templates";
import { Loader } from "lucide-react";
import { useState } from "react";
import { Editor } from "./_components/editor";
import { chatSession } from "@/lib/gemini-ai";
import img from "next/image";
import axios from "axios";
// import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface templateSlugProps {
  templateSlug: string;
}

const TemplatePage = ({ params }: { params: templateSlugProps }) => {
  const [isLoading, setisLoading] = useState(false);
  const [aiOutput, setAIOutput] = useState<string>("");

  const selectedTemplate = contentTemplates.find(
    (item) => item.slug === params.templateSlug
  );

  const generateAIContent = async (formData: FormData) => {
    setisLoading(true);
    try {
      let dataSet = {
        title: formData.get("title"),
        description: formData.get("description"),
      };

      const selectedPrompt = selectedTemplate?.aiPrompt;
      const finalAIPrompt = JSON.stringify(dataSet) + ", " + selectedPrompt;

      const result = await chatSession.sendMessage(finalAIPrompt);
      setAIOutput(result.response.text());

      const response = await axios.post("/api/", {
        title: dataSet.title,
        description: result.response.text(),
        templateUsed: selectedTemplate?.name,
      });
      console.log("response: " + response);
      setisLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmit = async (formData: FormData) => {
    generateAIContent(formData);
  };
  return (
    <div>
    <Link href={"/dashboard"} className="flex items-center gap-2 p-5">
      <Button>
        <ArrowLeft />
        Back
      </Button>
    </Link>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5">
    <div className="shadow-md p-5 rounded-lg border bg-white">
      {selectedTemplate?.icon && (
        <img src={selectedTemplate.icon} alt="icon" width={50} height={50} />
      )}
      <h2 className="font-bold text-2xl mb-2 text-primary">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>
      

      <form className="mt-6" action={onSubmit}>
        <div className="flex flex-col gap-2 my-2 mb-7 bg-white">
          {selectedTemplate?.form?.map((form) => (
            <div key={selectedTemplate.slug}>
              <label className="font-bold">{form.label}</label>
              {form.field === "input" ? (
                <div className="mt-5">
                  <Input name="title"></Input>
                </div>
              ) : (
                <div className="mt-5">
                  <Textarea name="description" />
                </div>
              )}
            </div>
          ))}
        </div>
        <Button className="w-full py-6" type="submit">
          {isLoading ? (
            <Loader className="animate-spin"></Loader>
          ) : (
            "Generate Content"
          )}
        </Button>
      </form>
      </div>
      
      <div className="col-span-2">
        <Editor value={isLoading ? "Generating..." : aiOutput} />
      </div>
    </div>
    </div>
 
    
  );
};

export default TemplatePage;
