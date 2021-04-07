import { GetStaticProps } from "next";
import React from "react";
import PostsGrid from "../../components/home/PostsGrid";
import DefaultLayout from "../../layouts/DefaultLayout";
import Prismic from "prismic-javascript";
import { Client } from "../../config/prismic-configuration";

interface Props {
  posts: IPost[];
}

const Index: React.FC<Props> = ({ posts }) => {
  return (
    <DefaultLayout>
      <section>
        <div className="px-4 md:px-8">
          <PostsGrid posts={posts} />
        </div>
      </section>
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const response = await Client().query(
      Prismic.Predicates.at("document.type", "blog_post"),
      { orderings: "[my.blog_posts.date desc]" }
    );
    console.log(response);
    
    return {
      props: {
        posts: response.results,
      },
    };
  } catch (err) {
    return {
      props: {
        posts: [],
      },
    };
  }
};



export default Index;
