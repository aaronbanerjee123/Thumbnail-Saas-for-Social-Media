import React from "react";
import { IoIosAdd } from "react-icons/io";
import { FaUpload } from "react-icons/fa6";

//
type dropzoneProps = {
  setSelectedImage: (file?: File) => void;
};

const Dropzone = ({ setSelectedImage }: dropzoneProps) => {
  return (
    <div>
      <input
        onChange={(e) => setSelectedImage(e.target.files?.[0])}
        className="hidden"
        type="file"
        id="file-upload"
        accept="image/*"
      />
      <label
        htmlFor="file-upload"
        className="relative flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-[#A9A9A9] bg-white px-10 py-10"
    >
        <div className="absolute inset-3 rounded-xl border border-dashed border-[#A9A9A9]">
        </div>
        <p className="">Upload File</p>
        <FaUpload  className="h-10 w-10"/>

      </label>
    </div>
  );
};

export default Dropzone;
