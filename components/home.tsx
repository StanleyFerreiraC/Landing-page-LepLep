import back from "@/public/BotFoot1Copia.png";
export default function Home() {
  return (
    <section
      id="inicio"
      className="overflow-hidden bg-gray-50  sm:grid sm:grid-cols-2 mt-16 "
    >
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right md:flex md:flex-col md:justify-center md:align-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            A Essência do Couro em Cada Detalhe
          </h2>

          <p className="text-lg text-gray-500 md:text-2xl md:mt-4 md:block">
            Há mais de 27 anos, oferecemos peças de couro que unem durabilidade,
            elegância e tradição. Localizada no coração de Fortaleza, nossa loja
            é referência para quem busca qualidade em calçados, mochilas,
            cintos, carteiras, chapéus e muito mais. Venha nos visitar no 1º
            andar do Mercado Central e descubra o verdadeiro valor do artesanato
            em couro.
          </p>

          <div className="mt-4 md:mt-8">
            <a
              href="#sobre"
              className="inline-block rounded bg-yellow-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-yellow-800 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Conheça nossa loja
            </a>
          </div>
        </div>
      </div>

      <img
        alt=""
        src={back.src}
        className="h-56 w-full object-cover sm:h-full"
      />
    </section>
  );
}
