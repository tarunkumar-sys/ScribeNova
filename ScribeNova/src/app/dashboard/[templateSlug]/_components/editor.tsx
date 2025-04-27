"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import "react-quill/dist/quill.snow.css";

export const Editor = ({ value }: { value: string }) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between  items-center p-5">
        <h2 className="font-bold text-lg">Your Result</h2>
        <Button className="flex gap-2">
          <Copy className="w-4 h-4" /> Copy
        </Button>
      </div>
       <ReactQuill
      theme="snow"
      value={value}
      className="h-[400px] pb-10 bg-white whitespace-pre-wrap "
    ></ReactQuill>
    </div>
   
  );
};
