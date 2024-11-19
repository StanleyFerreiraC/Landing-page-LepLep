export default function Produtos() {
  return (
    <div className="relative mt-8 ">
      <div className="overflow-x-auto scroll-smooth">
        <ul className="flex gap-4 mb-5">
          {/* Item 1 */}
          <li className="min-w-[200px] max-w-[250px] flex-shrink-0">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/banner1.jpeg"
                alt="Produto 1"
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </li>

          {/* Item 2 */}
          <li className="min-w-[200px] max-w-[250px] flex-shrink-0">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/banner2.jpeg"
                alt="Produto 2"
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </li>

          {/* Item 3 */}
          <li className="min-w-[200px] max-w-[250px] flex-shrink-0">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/banner3.jpeg"
                alt="Produto 3"
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </li>

          {/* Item 4 */}
          <li className="min-w-[200px] max-w-[250px] flex-shrink-0">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/banner4.jpeg"
                alt="Produto 4"
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </li>
          {/* Item 8 */}
          <li className="min-w-[200px] max-w-[250px] flex-shrink-0">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/banner8.jpeg"
                alt="Produto 8"
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </li>

          {/* Item 5 */}
          <li className="min-w-[200px] max-w-[250px] flex-shrink-0">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/banner5.jpeg"
                alt="Produto 4"
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </li>

          {/* Item 6 */}
          <li className="min-w-[200px] max-w-[250px] flex-shrink-0">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/banner6.jpeg"
                alt="Produto 4"
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </li>
          {/* Item 7 */}
          <li className="min-w-[200px] max-w-[250px] flex-shrink-0">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/banner7.jpeg"
                alt="Produto 7"
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </li>
          {/* Item 9 */}
          <li className="min-w-[200px] max-w-[250px] flex-shrink-0">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/banner9.jpeg"
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
