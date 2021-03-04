import React, { useState } from "react";
import IconSvg from "../icons/IconSvg";
import LogoSvg from "../icons/LogoSvg";
import HamburgerSvg from "../icons/HamburgerSvg";

const Navigator: React.FC = (props) => {
  return (
    <nav>
      <div className="flex w-full bg-myblue justify-center items-center">
        <div className="flex-1 flex md:space-x-8 md:items-center">
          <div className="bg-mylightblue p-2 md:p-4">
            <IconSvg className="w-8 h-8 md:w-12 md:h-12" />
          </div>
          <div className="hidden md:block text-mywhite">
            <div className="border-b-2 border-mygreen px-4 py-2">Home</div>
          </div>
          <div className="hidden md:block text-mywhite px-4 py-2">Blog</div>
        </div>
        <div className="flex-1 text-center flex justify-center items-center">
          <LogoSvg className="w-15 md:w-50 md:h-30" />
        </div>
        <div className="flex-1 flex justify-end text-right items-center">
          <div className="p-2 md:p-4 md:hidden">
            <HamburgerSvg />
          </div>
          <div className="hidden md:block text-mywhite pr-8">
            Gino Pietrobon
          </div>
          <div className="pr-4">
            <img
              src="imgs/avatar.png"
              alt="avatar gino pietrobon"
              className="hidden md:block w-14 h-14 rounded-full"
            ></img>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigator;
