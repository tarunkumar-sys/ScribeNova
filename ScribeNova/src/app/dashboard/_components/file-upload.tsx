"use client";
import * as React from "react";
import { Upload } from "lucide-react";
import { METHODS } from "http";
//  this is for backend...
const FileUpload: React.FC = () => {
  const handleFileUploadButtonClick = () => {
    const el = document.createElement("input");
    el.setAttribute("type", "file");
    el.setAttribute("accept", "application/pdf");
    el.addEventListener("change", async (ev) => {
      if (el.files && el.files.length > 0) {
        const file = el.files.item(0);
        if (file) {
          const formData = new FormData();
          formData.append("pdf", file);

          // fetch call to upload the file
          await fetch("http://localhost:8000/upload/pdf", {
            method: "POST",
            body: formData,
          });
          console.log("File uploaded successfully");
        }
      }
    });
    el.click();
  };

  return (
    <div className="flex items-center justify-center w-full h-10 bg-gray-100 border border-dashed border-gray-300 rounded-md cursor-pointer hover:bg-gray-200 transition duration-200 ease-in-out">
      <div
        onClick={handleFileUploadButtonClick}
        className="flex flex-col items-center justify-center"
      >
        <h3>Upload PDF File</h3>
        <Upload className="h-4 w-4" />
      </div>
    </div>
  );
};

export default FileUpload;
