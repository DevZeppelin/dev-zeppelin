import React, { useState } from "react";

interface Prop {
  post: any;
}

const PostCard: React.FC<Prop> = ({ post }) => {
  return (
    <div className="bg-mylightblue rounded-xl">
      <div className="rounded-xl">
        <img src="/imgs/blog.png" className="rounded-xl" />
      </div>
      <div className="p-4">
        <h5
          className="text-white text-2xl mb-4"
          style={{ textShadow: "0px 10px 50px rgba(255, 255, 255, 2.45)" }}
        >
          El futuro es hoy
        </h5>
     

      <p className="text-mywhite text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, maiores
        hic, dolor ipsa alias deserunt incidunt suscipit accusantium illum
        consequatur voluptatibus pariatur officiis aut non tenetur. Ut, a
        aperiam. Deleniti?
      </p>
      <div className="flex justify-end">
          <div className="bg-mygreen w-12 h-12 flex items-center justify-center rounded-full font-extrabold">
            >
          </div>
      </div>
    </div>
    </div>
  );
};

export default PostCard;
