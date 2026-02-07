import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Casosal from "./components/Casosal";

// Mock Data
const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: "Minimalist Watch",
    price: 129,
    description: "Elegant timekeeping for the modern individual.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
    count: 0,
  },
  {
    id: 2,
    name: "Designer Headphones",
    price: 249,
    description: "Immersive sound with premium noise cancellation.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    count: 0,
  },
  {
    id: 3,
    name: "Leather Backpack",
    price: 189,
    description: "Handcrafted leather for your daily adventures.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop",
    count: 0,
  },
  {
    id: 4,
    name: "Smart Speaker",
    price: 99,
    description: "Voice-controlled assistant for your smart home.",
    image:
      "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=1000&auto=format&fit=crop",
    count: 0,
  },
  {
    id: 5,
    name: "Premium Sunglasses",
    price: 159,
    description: "UV protection with a classic aviator style.",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1000&auto=format&fit=crop",
    count: 0,
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: 149,
    description: "Tactile switches for the ultimate typing experience.",
    image:
      "https://images.unsplash.com/photo-1587829741301-308231f89013?q=80&w=1000&auto=format&fit=crop",
    count: 0,
  },
];

function App() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  const handleIncrement = (id) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, count: p.count + 1 } : p)),
    );
  };

  const handleDecrement = (id) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, count: Math.max(0, p.count - 1) } : p,
      ),
    );
  };

  const totalCartCount = products.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Navbar cartCount={totalCartCount} />

      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
            Discover <span className="text-blue-600">Excellence</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of premium products designed to
            elevate your everyday life.
          </p>
        </div>

        <Casosal
          products={products}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </main>
    </div>
  );
}

export default App;
