import React, { useState } from "react";
import PostCard from "../posts/PostCard";

const PostsGrid: React.FC<{ posts: [] }> = ({ posts }) => {
  return (
  <div>
      {posts.map((post: any, index: number) => {
          return <PostCard post={post} key={index} />

      })}
  </div>;
  )
};

export default PostsGrid;
