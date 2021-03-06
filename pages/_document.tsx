import Document, { Html, Head, Main, NextScript } from "next/document";

import React from "react";

class MyDocument extends Document {  

  render() {    
    
    
    return (
      <Html lang="es">
        <Head>
        <link rel="icon" href="/favicon.ico" />          
        </Head>
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Dev Zeppelin. Páginas optimizadas, veloces, con 100% perfomance. Más SEO, Mejor experiencia de usuarios, Más dinero apra tu empresa."
          />
          <meta
            name="keywords"
            content="página web, perfomance, seo, fast, original, react, next, pro"
          />
          <meta name="author" content="Gino Pietrobon" />          
          
   
        </head>

        <body>
          <Main />
          <NextScript />
          
        </body>
      </Html>
    );
  }
}


export default MyDocument;
