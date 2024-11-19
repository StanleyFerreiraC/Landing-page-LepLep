import { useState } from "react";
import Image from "@/public/images/icons8.png";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <header className="fixed z-30 w-full">
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse gap-2"
          >
            <img
              src={Image.src}
              className="h-8 scale-[1.4]"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              LepLep
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100
            focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={navbarOpen ? "true" : "false"}
            onClick={toggleNavbar}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              navbarOpen ? "block" : "hidden"
            } top-full left-0 w-full md:block md:w-auto text-center `}
            id="navbar-default"
          >
            <ul
              className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100
             rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white"
            >
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:hover:text-yellow-700 md:p-0  font-bold"
                  aria-current="page"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:hover:text-yellow-700 md:p-0  font-bold"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:hover:text-yellow-700 md:p-0  font-bold"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:hover:text-yellow-700 md:p-0  font-bold"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
        </div>
        
      </nav>
    </header>
  );
}
