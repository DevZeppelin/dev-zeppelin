import PostsGrid from "../components/home/PostsGrid";
import SendSvg from "../components/icons/SendSvg";
import PostCard from "../components/posts/PostCard";
import DefaultLayout from "../layouts/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout>

      <div>
        
        <section className="md:w-full lg:flex mb-8 lg:items-center">
          <div className="flex-1 px-4">
            <h1
              className="text-mywhite text-4xl font-bold mb-8 mt-10 md:mb-8 md:mt-4"
              style={{ textShadow: "0px 10px 50px rgba(255, 255, 255, 0.45)" }}
            >
              Páginas de calidad
              </h1>
            <div
              className="hidden md:block bg-mygreen mb-8"
              style={{ height: 3 }}
            />
            <div className="text-mywhite mb-8 text-center md:text-justify text-sm">
              <p>Te vas a enamorar de la velocidad de nuestras paginas. 100% SEO, lo que permite que los buscadores como Google las posicionen arriba en los resultados. 100% Perfomance, lo que otorga al usuario una experiencia de velocidad extrema y una fluidez muy poco vista en el mundo web. </p>
              <p>Un gran arma para atraer trafico a tu web: generar contenido de calidad y que usted como cliente pueda subir contenido en cualquier momento y de manera facil.</p>
              <p>Es hora de ganar a la competencia el mejor lugar en el mundo web. No pagando publicidad, sino utilizando tecnologias <i>punta de lanza</i>.</p>
              </div>
            <div className="hidden lg:block">
              <h2 className="text-base text-mywhite mb-4 my-8">
                Para más información
                </h2>
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
                      <SendSvg className="h-5 w-5 stroke-current text-mywhite fill-current mr-1" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center flex-1">
            <section>
              <h2 className="text-mywhite text-2xl text-center mb-4">
                Entradas Recientes
                </h2>
              <div className="mx-4">
                <PostCard post={{}} />
              </div>
            </section>
          </div>
        </section>
        <section className="md:hidden flex flex-col items-center mb-4">
          <h2 className="text-mywhite text-2xl text-center mb-4">
            Entradas Recientes
            </h2>
          <div className="mx-4">
            <PostCard post={{}} />
          </div>
        </section>
        <div className="h-1 bg-mygreen my-8 mx-1 sm:hidden"></div>
        <section>
          <div className="px-4 md:px-8">
            <PostsGrid posts={[1, 2, 3, 4, 5, 6]} />
          </div>
        </section>
      </div>
</DefaultLayout >
);
}
