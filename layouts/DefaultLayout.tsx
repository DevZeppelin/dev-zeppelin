import Head from 'next/head';
import React, { useState } from 'react'
import Navigator from '../components/layouts/Navigator';
import SocialSidebar from '../components/layouts/SocialSidebar';


const DefaultLayout: React.FC = (props) => {
    return (
        <div className="h-full md:h-screen pb-1 bg-myblue">
        <Head>
          <title>Dev Zeppelin</title>
          <link rel="icon" href="/favicon.ico" />         
        </Head>
        <Navigator />
        <main className="flex py-4 px-4 md:px-0">
            <SocialSidebar />
            {props.children}
        </main>
        </div>
        )
}

export default DefaultLayout;