"use client";

import React from 'react'
import Dropzone from './dropzone';

const ThumbnailsCreator = () => {
    const setSelectedImage = async (file?:File) => {

    }
  return (
    <Dropzone setSelectedImage={setSelectedImage} />
  )
}

export default ThumbnailsCreator