"use client";
import Images from "@/components/Images";
import Texts from "@/components/Texts";
import Boxes from "@/components/Boxes";
import Content from "@/components/Content";
import { useEffect, useState } from "react";

const Landingpage = () => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setHeight(Number(window.innerHeight));
  }, []);
  return (
    <div className=" px-4 overflow-hidden sm:px-0 w-full bg-black h-full text-white">
      <header className="container font-sans relative h-screen mx-auto pt-20 ">
        {/* <Navbar /> */}
        <Images height={height} />
        <Texts height={height} />
        <Boxes height={height} />
        <Content />
      </header>
    </div>
  );
};

export default Landingpage;
