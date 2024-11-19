"use client";

import { useState, useEffect } from "react";
import "../app/css/style.css";

export default function Sobre() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/MercadoEntrada.jpeg", "/MercadoInt.jpeg", "/mercado1.jpg"];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };
  return (
    <section
      id="sobre"
      className="relative flex items-center before:absolute before:inset-0 before:-z-20  bg-[url('/images/couro2.jpeg')] bg-cover bg-no-repeat"
    >
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-4/6 lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative lg:h-full ">
              <img
                alt=""
                src={images[currentImage]}
                className="md:rounded-xl"
              />
              <div className="absolute inset-x-0 bottom-0 flex justify-center p-4">
                <button
                  type="button"
                  className=" z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
                  data-carousel-prev
                  onClick={prevImage}
                >
                  <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 
                   group-hover:bg-white/50 "
                  >
                    <svg
                      className="w-4 h-4 text-white  rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                    <span className="sr-only">Previous</span>
                  </span>
                </button>
                <button
                  type="button"
                  className=" flex items-center justify-center h-full px-4 cursor-pointer group "
                  data-carousel-next
                  onClick={nextImage}
                >
                  <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  group-hover:bg-white/50
                   "
                  >
                    <svg
                      className="w-4 h-4 text-white  rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="sr-only">Next</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>
            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl md:text-4xl font-bold">
                Nossa História, Sua Confiança
              </h2>
              <p className="text-md md:text-2xl mt-4 text-gray-600">
                Fundada há mais de 27 anos no centro de Fortaleza, nossa loja é
                um destino certo para amantes de couro de qualidade. Localizada
                na Avenida Alberto Nepomuceno, 199, no Mercado Central, nossa
                missão é oferecer peças que combinem tradição, estilo e
                funcionalidade. Aqui, você encontra desde itens prontos à
                pronta-entrega até criações exclusivas feitas sob encomenda.
                Cada peça é cuidadosamente selecionada para garantir a máxima
                durabilidade e sofisticação, atendendo às necessidades e aos
                desejos dos nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
