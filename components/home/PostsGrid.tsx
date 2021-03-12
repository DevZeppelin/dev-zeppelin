import React, { useState } from "react";
import PostCard from "../posts/PostCard";

const PostsGrid: React.FC<{ posts: any [] }> = ({ posts }) => {
  return (
  <div>
    <h2 className="text-mywhite text-2xl mb-4">Articulos del blog</h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {posts.map((post: any, index: number) => {
            return <PostCard post={post} key={index} />
        })}
    </div>
  </div>
  )
};

export default PostsGrid;
