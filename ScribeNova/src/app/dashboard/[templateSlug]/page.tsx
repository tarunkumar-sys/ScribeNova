// "use client";

// import { Button } from "@/components/ui/button";
// import { contentTemplates } from "@/lib/content-templates";
// import { useState } from "react";
// import { Editor } from "./_components/editor";
// import { ArrowLeft } from "lucide-react";
// import Link from "next/link";
// import { InputSection } from "./_components/input";

// interface templateSlugProps {
//   templateSlug: string;
// }

// const TemplatePage = ({ params }: { params: templateSlugProps }) => {
//   const [aiOutput, setAIOutput] = useState<string>("");

//   const selectedTemplate = contentTemplates.find(
//     (item) => item.slug === params.templateSlug
//   );

//   return (
//     <div>
//       <Link href={"/dashboard"} className="flex items-center gap-2 p-5">
//         <Button>
//           <ArrowLeft />
//           Back
//         </Button>
//       </Link>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5">
//         {/* Input Section */}
//         <div className="relative fixed">
//         <InputSection
//           selectedTemplate={selectedTemplate}
//           setAIOutput={setAIOutput}
//         />
//         </div>

//         {/* Output Section */}
//         <div className="col-span-2 rounded-lg">
//           <Editor value={aiOutput} />
//         </div>
//       </div>
//      </div>
//   );
// };

// export default TemplatePage;
"use client";

import { Button } from "@/components/ui/button";
import { contentTemplates } from "@/lib/content-templates";
import { useState } from "react";
import { Editor } from "./_components/editor";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { InputSection } from "./_components/input";

interface templateSlugProps {
  templateSlug: string;
}

const TemplatePage = ({ params }: { params: templateSlugProps }) => {
  const [aiOutput, setAIOutput] = useState<string>("");

  const selectedTemplate = contentTemplates.find(
    (item) => item.slug === params.templateSlug
  );

  return (
    <div className="h-screen flex flex-col">
      {/* Back Button */}
      <Link href={"/dashboard"} className="flex items-center gap-2 p-5">
        <Button>
          <ArrowLeft />
          Back
        </Button>
      </Link>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden px-5 gap-5">
        {/* Input Section (Fixed Height) */}
        <div className="w-full md:w-1/3 h-full">
          <InputSection
            selectedTemplate={selectedTemplate}
            setAIOutput={setAIOutput}
          />
        </div>

        {/* Output Section (Editor) */}
        <div className="flex-1 h-full">
          <Editor value={aiOutput} />
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;
