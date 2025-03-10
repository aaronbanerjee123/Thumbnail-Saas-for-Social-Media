'use client';
import React, { useState } from 'react'

type StyleProps = {
    image:string,
    selectStyle: () => void,
    isSelected:boolean
}



const Style = ({image,selectStyle,isSelected}:StyleProps) => {
 
    const [mouseOver, setMouseOver] = useState(false);
    return (  
        <div onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)}
        onClick = {selectStyle} className="relative w-fit cursor-pointer transition-all hover:scale-105"
        >
            {(mouseOver || isSelected ) && (
                <>
                <div className="absolute border-t border-black h-4 w-4 -rotate-45 -right-6 -top-4"></div>
                <div className="absolute border-t border-black h-4 w-4 rotate-[-75deg] -right-3 -top-6"></div>
                <div className="absolute border-t border-black h-4 w-4 rotate-[-20deg] -right-7 -top-0"></div>


                <div className="absolute border-t border-black h-4 w-4 -rotate-45 -left-4 -bottom-6"></div>
                <div className="absolute border-t border-black h-4 w-4 rotate-[-20deg] -bottom-3 -left-6"></div>
                <div className="absolute border-t border-black h-4 w-4 rotate-[-75deg] -bottom-7 -left-0"></div>

                </>
            )}
            <img className="min-w-52  rounded-lg"  src={image} alt="test"/>
      
        </div>
  )
}

export default Style