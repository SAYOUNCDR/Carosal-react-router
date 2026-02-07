import { ShoppingBag, Plus, Minus } from "lucide-react";

const Products = ({ products, onIncrement, onDecrement }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
          >
            <div className="relative h-48 bg-gray-50 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              {product.count > 0 && (
                <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {product.count} in cart
                </div>
              )}
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">{product.name}</h3>
                <span className="font-bold text-gray-900">
                  ${product.price}
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-4 flex-grow line-clamp-2">
                {product.description}
              </p>

              <div className="mt-auto">
                {product.count === 0 ? (
                  <button
                    onClick={() => onIncrement(product.id)}
                    className="w-full py-2 bg-black text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 active:scale-[0.98] transition-all text-sm"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    Add
                  </button>
                ) : (
                  <div className="flex items-center justify-between bg-gray-50 rounded-lg p-1 border border-gray-100">
                    <button
                      onClick={() => onDecrement(product.id)}
                      className="w-8 h-8 flex items-center justify-center bg-white rounded shadow-sm text-gray-700 hover:text-black transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-bold text-sm text-gray-900 w-6 text-center tabular-nums">
                      {product.count}
                    </span>
                    <button
                      onClick={() => onIncrement(product.id)}
                      className="w-8 h-8 flex items-center justify-center bg-black text-white rounded shadow-sm hover:bg-gray-800 transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
