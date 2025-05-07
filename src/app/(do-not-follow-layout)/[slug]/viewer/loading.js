"use client";

import dynamic from "next/dynamic";
import React from "react";
import loaderAnimation from "../../../../../public/images/LOADER.json"; // preload statically

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Loader = () => {
  return (
    <div className="loader-center">
      <Lottie animationData={loaderAnimation} loop={true} style={{ width: 200 }} />
    </div>
  );
};

export default Loader;
