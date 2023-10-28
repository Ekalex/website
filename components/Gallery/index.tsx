"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";



  const Gallery = () => {
    return(
    <div className="-m-1 flex flex-wrap md:-m-2">
      <div className="flex w-1/2 flex-wrap">
        <div className="w-1/2 p-1 md:p-2">
            <picture className="max-w-prose">
            <source srcSet='/images/chef_eric_1280.webp' type="image/webp" />
            <source srcSet='/images/chef_eric_1280.jpg' type="image/jpeg" />
           <img src='/images/chef_eric_1280.jpg' alt="Photo of Chef Eric" />
        </picture> 
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <picture className="max-w-prose">
          <source srcSet='/images/chef_eric_1280.webp' type="image/webp" />
          <source srcSet='/images/chef_eric_1280.jpg' type="image/jpeg" />
          <img src='/images/chef_eric_1280.jpg' alt="Photo of Chef Eric" />
      </picture> 
        </div>
        <div className="w-full p-1 md:p-2">
        <picture className="max-w-prose">
        <source srcSet='/images/chef_eric_1280.webp' type="image/webp" />
        <source srcSet='/images/chef_eric_1280.jpg' type="image/jpeg" />
        <img src='/images/chef_eric_1280.jpg' alt="Photo of Chef Eric" />
      </picture> 
        </div>
      </div>
      <div className="flex w-1/2 flex-wrap">
        <div className="w-full p-1 md:p-2">
        <picture className="max-w-prose">
        <source srcSet='/images/chef_eric_1280.webp' type="image/webp" />
        <source srcSet='/images/chef_eric_1280.jpg' type="image/jpeg" />
        <img src='/images/chef_eric_1280.jpg' alt="Photo of Chef Eric" />
      </picture> 
        <div className="w-1/2 p-1 md:p-2">
        <picture className="max-w-prose">
        <source srcSet='/images/chef_eric_1280.webp' type="image/webp" />
        <source srcSet='/images/chef_eric_1280.jpg' type="image/jpeg" />
        <img src='/images/chef_eric_1280.jpg' alt="Photo of Chef Eric" />
      </picture> 
        </div>
        <div className="w-1/2 p-1 md:p-2">
        <picture className="max-w-prose">
        <source srcSet='/images/chef_eric_1280.webp' type="image/webp" />
        <source srcSet='/images/chef_eric_1280.jpg' type="image/jpeg" />
        <img src='/images/chef_eric_1280.jpg' alt="Photo of Chef Eric" />
      </picture> 
        </div>
      </div>
    </div>
  </div>)
  
  };


export default Gallery;
