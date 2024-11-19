import instagram from "@/public/instagram.svg";
import whatsapp from "@/public/whatsapp.svg";

export default function Cta() {
  return (
    <section id="contato">
      <div className="mx-auto bg-white flex justify-center">
        <div className="relative overflow-hidden p-10 md:flex md:w-3/4 md:justify-between ">
          <div className="flex flex-col items-center md:items-start gap-7 mb-6">
            <h2 className="text-2xl font-bold border-b-2">Rede Sociais</h2>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/leplepcouros/"
                target="_blank"
                className="hover:scale-110 transition "
              >
                <img
                  src={instagram.src}
                  width={50}
                  height={50}
                  alt="instagram"
                />
              </a>
              <a>
                <img src={whatsapp.src} width={50} height={50} alt="whatsapp" />
              </a>
            </div>
            <div className="mb-3 flex gap-3">
              <a
                href="#inicio"
                className="text-md font-bold text-gray-600 mb-1"
              >
                Inicio
              </a>
              <a href="#sobre" className="text-md font-bold text-gray-600 mb-1">
                Sobre
              </a>
              <a href="#servicos" className="text-md font-bold text-gray-600 ">
                Serviços
              </a>
            </div>
          </div>
          <div className=" md:flex gap-7 justify-end">
            <div className="mb-5">
              <h2 className="text-2xl font-bold border-b-2">
                Não sabe onde nos encontrar ?
              </h2>
              <div className="mt-4 mb-4">
                <p className="text-md font-bold text-gray-600 ">Endereço:</p>
                <p className="text-md  text-gray-600 ">
                  Loja 240 - 1° piso do mercado central
                </p>
                <p className="text-md  text-gray-600 ">
                  Av. Alberto Nepomuceno, 199 - Centro, Fortaleza - CE,
                  60055-000
                </p>
              </div>
              <div>
                <p className="text-md font-bold text-gray-600">
                  Horario de funcionamento:
                </p>
                <p className="text-md  text-gray-600">
                  Segunda a Sexta das 8h às 18h
                </p>
                <p className="text-md  text-gray-600">Sabado das 8h às 12h</p>
              </div>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63702.65832607338!2d-38.6086662424456!3d-3.71905991698959
                2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7484b8840959b:0x6ed535a1099961fd!2sMercado Central de Fortaleza!5e0!3m2!1spt-BR!2sbr!4v1731866914945!5m2!1spt-BR!2sbr"
                width="300"
                height="300"
                style={{ border: 0, borderRadius: "12px" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
