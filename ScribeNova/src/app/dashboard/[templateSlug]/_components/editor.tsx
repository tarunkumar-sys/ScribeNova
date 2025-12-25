// "use client";

// import dynamic from "next/dynamic";
// import { useMemo, useEffect, useRef, useState } from "react";
// import { Copy, Check } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import "react-quill/dist/quill.snow.css";
// import { marked } from "marked";

// marked.setOptions({
//   breaks: true,
//   gfm: true,
// });

// export const Editor = ({ value }: { value: string }) => {
//   const [copied, setCopied] = useState(false);
//   const [editorValue, setEditorValue] = useState<string>("");

//   // ReactQuill instance
//   const quillRef = useRef<any>(null);

//   const ReactQuill = useMemo(
//     () =>
//       dynamic(async () => {
//         const { default: RQ } = await import("react-quill");
//         return RQ;
//       }, { ssr: false }),
//     []
//   );

//   // Convert AI output → HTML
//   useEffect(() => {
//     if (value) {
//       setEditorValue(marked.parse(value) as string);
//     }
//   }, [value]);

//   // ✅ Copy visible editor text
//   const handleCopy = async () => {
//     try {
//       const editor = quillRef.current?.getEditor();
//       if (!editor) return;
//       const visibleText = editor.root.innerText; // clean text without <p>, <div>
//       await navigator.clipboard.writeText(visibleText.trim());
//       setCopied(true);
//       setTimeout(() => setCopied(false), 1500);
//     } catch (err) {
//       console.error("Copy failed", err);
//     }
//   };

//  return (
//   <>
//    <div className="flex justify-between items-center p-5 border-b sticky top-0 bg-white z-10">
//       <h2 className="font-bold text-lg">Your Result</h2>
//       <Button onClick={handleCopy} className="flex gap-2" type="button">
//         {copied ? (
//           <>
//             <Check className="w-4 h-4 text-green-600" /> Copied
//           </>
//         ) : (
//           <>
//             <Copy className="w-4 h-4" /> Copy
//           </>
//         )}
//       </Button>
//     </div>

//   <div className="bg-white shadow-lg border rounded-lg h-full flex flex-col">
//     {/* Toolbar + Copy */}
//     {/* Scrollable Text Area */}
//     <div className="flex-1">
//       <ReactQuill
//         ref={quillRef}
//         theme="snow"
//         value={editorValue}
//         onChange={setEditorValue}
//         className="h-full border-none rounded-b-lg overflow-hidden"
//         modules={{
//           toolbar: [
//             ["bold", "italic", "underline", "strike"],
//             [{ list: "ordered" }, { list: "bullet" }],
//             ["link"],
//             ["clean"],
//           ],
//         }}
//       />
//     </div>
//   </div>
//   </>
// );

// };


"use client";

import dynamic from "next/dynamic";
import { useMemo, useEffect, useRef, useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import "react-quill/dist/quill.snow.css";
import { marked } from "marked";

marked.setOptions({
  breaks: true,
  gfm: true,
});

export const Editor = ({ value }: { value: string }) => {
  const [copied, setCopied] = useState(false);
  const [editorValue, setEditorValue] = useState<string>("");

  const quillRef = useRef<any>(null);

  const ReactQuill = useMemo(
    () =>
      dynamic(async () => {
        const { default: RQ } = await import("react-quill");
        return RQ;
      }, { ssr: false }),
    []
  );

  useEffect(() => {
    if (value) {
      setEditorValue(marked.parse(value) as string);
    }
  }, [value]);

  const handleCopy = async () => {
    try {
      const editor = quillRef.current?.getEditor();
      if (!editor) return;
      const visibleText = editor.root.innerText;
      await navigator.clipboard.writeText(visibleText.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="bg-white shadow-lg border rounded-lg h-full flex flex-col">
      {/* Fixed Header */}
      <div className="flex justify-between items-center p-5 border-b sticky top-0 bg-white z-10">
        <h2 className="font-bold text-lg">Your Result</h2>
        <Button onClick={handleCopy} className="flex gap-2" type="button">
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-600" /> Copied
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" /> Copy
            </>
          )}
        </Button>
      </div>

      {/* Scrollable Text Area */}
      <div className="flex-1 overflow-y-auto">
        <ReactQuill
          ref={quillRef}
          theme="snow"
          value={editorValue}
          onChange={setEditorValue}
          className="h-full border-none rounded-b-lg [&_.ql-editor]:min-h-full [&_.ql-editor]:overflow-visible"
          modules={{
            toolbar: [
              ["bold", "italic", "underline", "strike"],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link"],
              ["clean"],
            ],
          }}
        />
         {/* Sticky toolbar */}
        <style jsx global>{`
          .ql-toolbar.ql-snow {
            position: sticky;
            background: white;
            z-index: 15;
            border-bottom: 1px solid #e5e7eb;
          }
          .ql-container.ql-snow {
            height: 100%;
            display: flex;
            flex-direction: column;
          }
          .ql-editor {
            flex: 1;
            overflow-y: auto;
          }
        `}</style>
      </div>
    </div>
  );
};
