import { useRef, useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Plus, Minus, ShoppingBag } from "lucide-react";

const ProductCard = ({ product, onIncrement, onDecrement }) => {
  return (
    <div className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full">
      <div className="relative h-64 bg-gray-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        {product.count > 0 && (
          <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
            {product.count} in cart
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          <span className="text-lg font-bold text-gray-900">
            ${product.price}
          </span>
        </div>
        <p className="text-sm text-gray-500 mb-6 grow">{product.description}</p>

        <div className="mt-auto">
          {product.count === 0 ? (
            <button
              onClick={() => onIncrement(product.id)}
              className="w-full py-3 bg-black text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 active:scale-[0.98] transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center justify-between bg-gray-50 rounded-xl p-1 border border-gray-100">
              <button
                onClick={() => onDecrement(product.id)}
                className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-bold text-lg text-gray-900 w-8 text-center tabular-nums">
                {product.count}
              </span>
              <button
                onClick={() => onIncrement(product.id)}
                className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-lg shadow-sm hover:bg-gray-800 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Carousel = ({ products, onIncrement, onDecrement }) => {
  const splideRef = useRef(null);

  useEffect(() => {
    if (splideRef.current) {
      const splide = new Splide(splideRef.current, {
        type: "slide",
        perPage: 3,
        perMove: 1,
        gap: "1.5rem",
        pagination: false,
        padding: "1rem",
        breakpoints: {
          1024: {
            perPage: 2,
            gap: "1rem",
          },
          640: {
            perPage: 1,
            gap: "0.5rem",
            padding: "2rem",
          },
        },
      });
      splide.mount();

      return () => {
        splide.destroy();
      };
    }
  }, []);

  return (
    <div className="w-full py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-8 px-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">
            Featured Collection
          </h2>
          <p className="text-gray-500">Curated premium items just for you.</p>
        </div>
      </div>

      <div className="splide" ref={splideRef}>
        <div className="splide__track">
          <ul className="splide__list">
            {products.map((product) => (
              <li className="splide__slide flex h-auto" key={product.id}>
                <ProductCard
                  product={product}
                  onIncrement={onIncrement}
                  onDecrement={onDecrement}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
