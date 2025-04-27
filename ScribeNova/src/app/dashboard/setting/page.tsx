import Image from "next/image";
import FileUpload from "../_components/file-upload";
import ChatComponent from "../_components/file-uploadschat";
import { Button } from "@/components/ui/button";
//  this is for backend...
export default function Setting() {
  return (
    <div className="bg-orange-400">
    <Button className="mt-2 ml-5">Back</Button>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 h-full">
      <div className="border rounded-sm bg-white col-span-1 h-[32rem] p-4 flex justify-center items-center">
        <FileUpload />
      </div>
      <div className="col-span-2 rounded-sm bg-white">
        {/* Right screen content goes here */}
        <ChatComponent />
      </div>
    </div>
    </div>
  );
}
