"use client";
import React, { useState } from 'react'
import Dropzone from './dropzone';
import Style from './style';

const ThumbnailsCreator = () => {
    const [selectedStyle,setSelectedStyle] = useState("style1");

    const [loading, setLoading] = useState(false);

    const [imageSrc, setImageSrc] = useState<string | null>(null);


    const setSelectedImage = async (file?:File) => {
      if(file){
        setLoading(true);

        const reader = new FileReader();

        reader.onload = async (e) => {
          const src = e.target?.result as string;
          setImageSrc(src);
        }

        reader.readAsDataURL(file);

      }
    }


  return (
    <>
    {imageSrc ? (
      <>
        {loading ? <div className="flex items-center justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-dashed border-gray-800"></div>
        </div> : <></>}
      </> 

    ): (
      <>
        <div className="flex flex-col mt-10 justify-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Hi there
            </h1>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Want to create a thumbnail?
            </h1>

            <p className="leading-7 text-muted-foreground mt-2">
                Use one of the templates below
            </p>

              <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-10 mb-7">
                <Style image="/teststyle.png" selectStyle={() => setSelectedStyle("style1")} isSelected={selectedStyle === "style1"} />
                <Style image="/teststyle.png" selectStyle={() => setSelectedStyle("style2")} isSelected={selectedStyle === "style2"} />
                <Style image="/teststyle.png" selectStyle={() => setSelectedStyle("style3")} isSelected={selectedStyle === "style3"} />

              </div>
              <Dropzone setSelectedImage={setSelectedImage} />

            </div>
      </>

    )}
    </>
    )
}

export default ThumbnailsCreator;