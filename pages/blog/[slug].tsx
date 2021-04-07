import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import React, { useState } from "react";
import Navigator from "../../components/layouts/Navigator";
import { Client } from "../../config/prismic-configuration";
import DefaultLayout from "../../layouts/DefaultLayout";
import Prismic from "prismic-javascript";

interface Props {
  post: IPost;
}

const Index: React.FC<Props> = ({ post }) => {
  console.log(post);

  const published = new Date (post.first_publication_date)

  return (
    <DefaultLayout>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="lg:w-3/4 lg:pr-16 text-center">
          <h3 className="text-mywhite mb-2">
            Escrito por: <span className="text-mygreen">Gino</span>
          </h3>
          <h1 className="text-mywhite text-4xl leading-none mb-16">
            {post.data.title[0].text}
          </h1>
          <div className="space-y-4 text-mywhite text-center">
            {post.data.body.map((part, index) => (
              <p className="text-white" key={index}>
                {part.text}
              </p>
            ))}
            <div className="text-mygreen">{published.getDate()} / {published.getMonth()} / {published.getFullYear()}</div>
          </div>
        </div>

        <div className="flex justify-center lg:mr-16">
          <div className="rounded-xl mb-6 max-w-xs">
            <img
              src={post.data.banner_image.url}
              alt={post.data.banner_image.alt}
              className="rounded-xl"              
            />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "primer-post" } }, // See the "paths" section below
    ],
    fallback: true, // See the "fallback" section below
  };
}


export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { slug } = context.params;
    const response = await Client().getByUID("blog_post", slug as string, null);
    return {
      props: {
        post: response,
      },
    };
  } catch (err) {
    return {
      props: {
        post: null,
      },
    };
  }
};


export default Index;
