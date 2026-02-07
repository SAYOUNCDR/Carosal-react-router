import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="min-w-[280px] md:min-w-[320px] bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group snap-center flex flex-col">
      {/* Image Area */}
      <div className="relative h-64 bg-gray-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          <span className="text-lg font-bold text-gray-900">
            ${product.price}
          </span>
        </div>
        <p className="text-sm text-gray-500 mb-6 flex-grow">
          {product.description}
        </p>

        {/* Actions */}
      </div>
    </div>
  );
};

const Carousel = ({ products, onIncrement, onDecrement }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === "left" ? -340 : 340;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-8 px-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">
            Featured Collection
          </h2>
          <p className="text-gray-500">Curated premium items just for you.</p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory scrollbar-hide px-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
