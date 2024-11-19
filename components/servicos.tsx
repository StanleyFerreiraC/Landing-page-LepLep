import Produtos from "./produtos";

export default function servicos() {
  return (
    <section id="servicos">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 text-center">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl mb-10 mt-16">
          Nossos Serviços
        </h2>
        <div>
          <div className=" rounded bg-gray-100 p-6 sm:p-8">
            <div className="md:flex w-full  text-center lg:text-left gap-4">
              {/* Vendas */}
              <div
                id="anuncio"
                className="mb-4 md:mb-0 flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-200 text-gray-800 mb-4">
                  <svg
                    viewBox="0 0 400 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M118.389 249.098C93.2216 224.346 109.322 228.485 140.5 227.983C180.574 227.338 243.306 226.669 251.493 227.983C254.894 228.528 294.288 226.618 293.46 233.001C292.891 237.387 281.225 240.163 278.73 240.519"
                        stroke="#000000"
                        strokeOpacity="0.9"
                        strokeWidth="16"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M143.225 218.992C144.062 198.463 157.131 146.891 180.145 151.729C187.33 153.239 192.885 160.352 200.2 160.352C207.479 160.352 212.452 152.637 219.8 150.58C243.564 143.918 253.008 196.477 254.897 215.542"
                        stroke="#000000"
                        strokeOpacity="0.9"
                        strokeWidth="16"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Vendas no Estoque
                </h3>
                <p className="mt-2 text-gray-600">
                  Encontre uma ampla variedade de calçados, mochilas, cintos,
                  carteiras e chapéus em couro de altíssima qualidade.
                </p>
              </div>
              {/* Encomenda */}
              <div
                id="anuncio"
                className="mb-4 md:mb-0 flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-200 text-gray-800 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0 0 128 128"
                  >
                    <path
                      d="M63,14.2l-48,17c-1.2,0.4-2,1.6-2,2.8v60c0,1.3,0.8,2.4,2,2.8l48,17c0.3,0.1,0.7,0.2,1,0.2c0.2,0,0.3,0,0.5,0
                      c0,0,0.1,0,0.1,0c0.1,0,0.2-0.1,0.3-0.1c0,0,0,0,0,0l48-17c1.2-0.4,2-1.6,2-2.8V34c0,0,0-0.1,0-0.1c0-0.1,0-0.3,0-0.4
                      c0,0,0-0.1,0-0.1c-0.2-1-0.9-1.9-1.9-2.2l-24-8.5c0,0-0.1,0-0.1,0c-0.6-0.2-1.4-0.3-2.1,0L40,39.2c-1.2,0.4-2,1.6-2,2.8v11
                      c0,1.7,1.3,3,3,3s3-1.3,3-3v-8.9l43.8-15.5L103,34L63,48.2c-1.2,0.4-2,1.5-2,2.8c0,0,0,0,0,0.1v55.8L19,91.9V36.1l46-16.3
                      c1.6-0.6,2.4-2.3,1.8-3.8C66.3,14.4,64.6,13.6,63,14.2z M67,53.1l42-14.9v53.6l-42,14.9V53.1z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Encomendas
                </h3>
                <p className="mt-2 text-gray-600">
                  Não achou seu tamanho ? Não se preocupe, encomedaremos o
                  tamanho que desejar.
                </p>
              </div>
              {/* Encomenda */}
              <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-200 text-gray-800 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    width={35}
                    height={35}
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                  >
                    <defs>
                      <style>
                        {
                          ".cls-1{fill:none;stroke:#020202;stroke-miterlimit:10;stroke-width:1.91px}"
                        }
                      </style>
                    </defs>
                    <path
                      d="M22.5 22.5h-21v-1.91l.96-1.91h19.09l.95 1.91v1.91zM11.75 5.32h.49a9.3 9.3 0 0 1 9.3 9.3v.25H2.45v-.25a9.3 9.3 0 0 1 9.3-9.3ZM12 1.5v3.82M9.14 1.5h5.72"
                      className="cls-1"
                    />
                    <path d="M5.32 14.86h13.36v3.82H5.32z" className="cls-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Atendimento Especializado
                </h3>
                <p className="mt-2 text-gray-600">
                  Nossa equipe está preparada para ajudar você a escolher o
                  produto ideal ou criar algo único que combine com sua
                  personalidade.
                </p>
              </div>
            </div>
            <Produtos />
          </div>
        </div>
      </div>
    </section>
  );
}
