import React, { useState } from "react";
import ArrorRightSvg from "../icons/ArrowRightSvg";

interface Prop {
  post: any;
}

const PostCard: React.FC<Prop> = ({ post }) => {
  return (
    <div className="bg-mylightblue rounded-xl" style={{maxWidth: 300}}>
      <div className="rounded-xl">
        <img src="/imgs/blog.webp" alt="imagen computadora blog" className="rounded-xl w-full" style={{height: 208, width: 300}} />
      </div>
      <div className="p-4">
        <h3
          className="text-mywhite text-xl mb-4"
          style={{ textShadow: "0px 10px 50px rgba(255, 255, 255, 2.45)" }}
        >
          El futuro es hoy
        </h3>
     

      <p className="text-mywhite text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, maiores
        hic, dolor ipsa alias deserunt.
      </p>
      <div className="flex justify-end">
          <div className="bg-mygreen w-12 h-12 flex items-center justify-center rounded-full font-extrabold">
            <ArrorRightSvg />
          </div>
      </div>
    </div>
    </div>
  );
};

export default PostCard;
