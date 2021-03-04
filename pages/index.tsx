import Head from "next/head";
import SendSvg from "../components/icons/SendSvg";
import FacebookSvg from "../components/icons/social/FacebookSvg";
import LinkedinSvg from "../components/icons/social/LinkedinSvg";
import TwitterSvg from "../components/icons/social/TwitterSvg";
import WhatsappSvg from "../components/icons/social/WhatsappSvg";
import Navigator from "../components/layouts/Navigator";
import PostCard from "../components/posts/PostCard";

export default function Home() {
  return (
    <div className="h-full pb-1 bg-myblue">
      <Head>
        <title>Dev Zeppelin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigator />
      <main>
        <section className="px-4 md:w-full lg:flex mb-8 lg:items-center">
          <div className="hidden lg:flex flex-col justify-center ml-4 mr-16">
            <div className=" space-y-2">
              <div>
                <a href="/" target="_blank" className="cursor-pointer">
                  <FacebookSvg className="h-10 w-10" />
                </a>
              </div>
              <div>
                <a href="/" target="_blank" className="cursor-pointer">
                  <TwitterSvg className="h-10 w-10" />
                </a>
              </div>
              <div>
                <a href="/" target="_blank" className="cursor-pointer">
                  <WhatsappSvg className="h-10 w-10" />
                </a>
              </div>
              <div>
                <a href="/" target="_blank" className="cursor-pointer">
                  <LinkedinSvg className="h-10 w-10" />
                </a>
              </div>
            </div>
            <div className="h-10" />
            <div className="space-y-3 flex flex-col items-center ">
              <div className="h-4 w-4 rounded-full bg-mywhite" />
              <div className="h-3 w-3 rounded-full bg-mywhite" />
              <div className="h-2 w-2 rounded-full bg-mywhite" />
              <div className="h-1 w-1 rounded-full bg-mywhite" />
            </div>
          </div>
          <div className="flex-1">
            <h1
              className="text-white text-4xl font-bold mb-8 mt-4"
              style={{ textShadow: "0px 10px 50px rgba(255, 255, 255, 0.45)" }}
            >
              Las páginas web del futuro
            </h1>
            <div
              className="hidden md:block bg-mygreen mb-8"
              style={{ height: 5 }}
            />
            <div className="text-mywhite mb-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Deserunt, architecto. Tempora culpa doloribus labore, beatae hic
              dolorem ex nostrum quis quam saepe illum dolore iure. Nesciunt
              iste a asperiores? Nihil. Nesciunt, quos vitae blanditiis dolorem
              nihil voluptatibus ipsa. Illum exercitationem esse obcaecati,
              earum excepturi, assumenda placeat odio nulla asperiores debitis
              expedita officia aut! Iste, laudantium deleniti non exercitationem
              ipsum culpa. Officia cum minima sunt, cumque maiores dignissimos.
            </div>
            <div className="hidden lg:block">
              <h3 className="text-xl text-mywhite mb-4 my-8">
                Para más información
              </h3>
              <div className="flex">
                <div
                  style={{ backgroundColor: "#11698e" }}
                  className="flex rounded-full px-4 py-2 text-mywhite w-80 "
                >
                  <input
                    style={{ backgroundColor: "#11698e" }}
                    placeholder="Escribe tu mail"
                    className="w-full"                    
                  />
                   </div>
                  <div>
                    <a href="/">
                      <div className="bg-mygreen flex items-center justify-center rounded-full p-4 ">
                        <SendSvg className="h-6 w-6 stroke-current text-mywhite fill-current mr-1" />
                      </div>
                    </a>
                  </div>
               
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-center flex-1">
            <section>
              <h4 className="text-mywhite text-2xl text-center mb-4">
                Entradas Recientes
              </h4>
              <div className="mx-4">
                <PostCard post={{}} />
              </div>
            </section>
          </div>
        </section>
        <section className="md:hidden">
          <h4 className="text-mywhite text-2xl text-center mb-4">
            Entradas Recientes
          </h4>
          <div className="mx-4">
            <PostCard post={{}} />
          </div>
        </section>
      </main>
    </div>
  );
}
