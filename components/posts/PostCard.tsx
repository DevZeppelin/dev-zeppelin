import Link from "next/link";
import React, { useState } from "react";
import ArrorRightSvg from "../icons/ArrowRightSvg";


interface Prop {
  post: IPost
}

const PostCard: React.FC<Prop> = ({ post }) => {

  const { data } = post
  console.log(post)

  

  return (
    <Link href={`/blog/${post.uid}`}>
      <a>
        <div className="bg-mylightblue rounded-xl" style={{maxWidth: 300}}>
          <div className="rounded-xl">
            <img src="/imgs/blog.webp" alt="imagen computadora blog" className="rounded-xl w-full" style={{height: 208, width: 300}} />
          </div>
          <div className="p-4">
            <h3
              className="text-mywhite text-xl mb-1"
              style={{ textShadow: "0px 10px 50px rgba(255, 255, 255, 2.45)" }}
            >
             {data.title[0].text}
            </h3>
        
          <p className="text-mywhite text-sm">
          {data.description[0].text}
          </p>
          <div className="flex justify-end">
              <div className="bg-mygreen w-9 h-9 mt-2 flex items-center justify-center rounded-full font-extrabold">
                <ArrorRightSvg className="stroke-current text-mywhite " />
              </div>
          </div>
        </div>
        </div>
      </a>
    </Link>
  );

  
};

export default PostCard;

