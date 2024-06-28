import React from "react";
import bgExplore from "../../images/bgtexture1/840843081452.jpg";
import Image from "next/image";

const ExploreHeader = () => {
  return (
    <header
      style={{ backgroundImage: `url(${bgExplore})` }}
      className=" relative  w-screen h-96 py-12"
    >
      {/* <Image className="-z-10 absoute top-0 w-full" src={bgExplore} /> */}
      <p className="z-10 text-6xl">hello how</p>
    </header>
  );
};

export default ExploreHeader;
