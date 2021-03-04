import Head from "next/head";
import Navigator from "../components/layouts/Navigator";
import PostCard from "../components/posts/PostCard";

export default function Home() {
  return (
    <div className="h-full pb-12 bg-myblue">
      <Head>
        <title>Dev Zeppelin</title>
        <link rel="icon" href="/favicon.ico" />                            
      </Head>
      <Navigator />
      <main>
        <section  className="px-4 md:w-full lg:flex mb-8">
          <div></div>
          <div className="flex-1">
            <h1
              className="text-white text-4xl font-bold mb-8 mt-4"
              style={{ textShadow: "0px 10px 50px rgba(255, 255, 255, 0.45)" }}
            >
              Las páginas web del futuro
            </h1>
            <div className="hidden md:block bg-mygreen mb-8" style={{ height: 5 }} />
            <div className="text-mywhite mb-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt,
              architecto. Tempora culpa doloribus labore, beatae hic dolorem ex
              nostrum quis quam saepe illum dolore iure. Nesciunt iste a
              asperiores? Nihil. Nesciunt, quos vitae blanditiis dolorem nihil
              voluptatibus ipsa. Illum exercitationem esse obcaecati, earum
              excepturi, assumenda placeat odio nulla asperiores debitis expedita
              officia aut! Iste, laudantium deleniti non exercitationem ipsum
              culpa. Officia cum minima sunt, cumque maiores dignissimos.
            </div>
            <div className="hidden lg:block">
              <h3 className="text-2xl text-mywhite mb-4">Para más información</h3>
              <div className="flex">
                <div style={{backgroundColor: "#11698e"}} className="rounded-full px-4 py-2 text-mywhite">
                  <input style={{backgroundColor: "#11698e"}} placeholder="Escribe tu mail" />
                  <a href="/">
                    <button className="font-bold">Send</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1"></div>
        </section>
        <section>
          <h4 className="text-mywhite text-2xl text-center mb-4">Entradas Recientes</h4>
          <div className="mx-4">
            <PostCard post={{}} />
          </div>

        </section>
      </main>
    </div>
  );
}
