import banner1 from "@/public/banner1.jpeg";
import banner2 from "@/public/banner2.jpeg";
import banner3 from "@/public/banner3.jpeg";
import banner4 from "@/public/banner4.jpeg";
import banner5 from "@/public/banner5.jpeg";
import banner6 from "@/public/banner6.jpeg";
import banner7 from "@/public/banner7.jpeg";
import banner8 from "@/public/banner8.jpeg";

export default function Produtos() {
  return (
    <div className="relative mt-8 ">
      <div className="overflow-x-auto scroll-smooth">
        <ul className="flex gap-4 mb-5">
          {/* Item 1 */}
          <li className="min-w-[200px] max-w-[250px] flex-shrink-0">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={banner1.src}
                alt="Produto 1"
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </li>

          {/* Item 2 */}
          <li className="min-w-[200px] max-w-[250px] flex-shrink-0">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={banner2.src}
                alt="Produto 2"
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </li>

          {/* Item 3 */}
          <li className="min-w-[200px] max-w-[250px] flex-shrink-0">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={banner3.src}
                alt="Produto 3"
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </li>

          {/* Item 4 */}
          <li className="min-w-[200px] max-w-[250px] flex-shrink-0">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={banner4.src}
                alt="Produto 4"
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </li>
          {/* Item 8 */}
          <li className="min-w-[200px] max-w-[250px] flex-shrink-0">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={banner8.src}
                alt="Produto 8"
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </li>

          {/* Item 5 */}
          <li className="min-w-[200px] max-w-[250px] flex-shrink-0">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={banner5.src}
                alt="Produto 4"
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </li>

          {/* Item 6 */}
          <li className="min-w-[200px] max-w-[250px] flex-shrink-0">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={banner6.src}
                alt="Produto 4"
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </li>
          {/* Item 7 */}
          <li className="min-w-[200px] max-w-[250px] flex-shrink-0">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={banner7.src}
                alt="Produto 7"
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </li>
          {/* Item 9 */}
          <li className="min-w-[200px] max-w-[250px] flex-shrink-0">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={banner8.src}
                alt="Produto 8"
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
