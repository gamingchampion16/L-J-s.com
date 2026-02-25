import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import { motion } from 'motion/react';

const PRODUCTS = [
  {
    id: 1,
    name: "Classic Linen Shirt",
    price: 89.00,
    category: "Apparel",
    image: "https://picsum.photos/seed/shirt/600/800"
  },
  {
    id: 2,
    name: "Minimalist Leather Watch",
    price: 145.00,
    category: "Accessories",
    image: "https://picsum.photos/seed/watch/600/800"
  },
  {
    id: 3,
    name: "Canvas Weekend Bag",
    price: 120.00,
    category: "Travel",
    image: "https://picsum.photos/seed/bag/600/800"
  },
  {
    id: 4,
    name: "Silk Evening Scarf",
    price: 65.00,
    category: "Apparel",
    image: "https://picsum.photos/seed/scarf/600/800"
  },
  {
    id: 5,
    name: "Modern Sunglasses",
    price: 110.00,
    category: "Accessories",
    image: "https://picsum.photos/seed/glasses/600/800"
  },
  {
    id: 6,
    name: "Leather Chelsea Boots",
    price: 195.00,
    category: "Footwear",
    image: "https://picsum.photos/seed/boots/600/800"
  }
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Hero />

        {/* Product Section */}
        <section id="shop" className="py-20 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-zinc-900 mb-4">
                Curated Collections
              </h2>
              <p className="text-zinc-500 leading-relaxed">
                Explore our latest arrivals, handpicked for quality and style. Each piece is selected to complement your unique aesthetic.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="text-sm font-semibold text-zinc-900 border-b-2 border-zinc-900 pb-1">All Products</button>
              <button className="text-sm font-medium text-zinc-400 hover:text-zinc-900 transition-colors pb-1">New Arrivals</button>
              <button className="text-sm font-medium text-zinc-400 hover:text-zinc-900 transition-colors pb-1">Best Sellers</button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          >
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                category={product.category}
                image={product.image}
              />
            ))}
          </motion.div>

          <div className="mt-20 text-center">
            <button className="px-10 py-4 border-2 border-zinc-900 text-zinc-900 font-bold rounded-full hover:bg-zinc-900 hover:text-white transition-all">
              View All Products
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-zinc-50 py-20 border-y border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <span className="text-emerald-600 font-bold">01</span>
                </div>
                <h3 className="font-semibold text-zinc-900 mb-3">Ethical Sourcing</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">We partner with artisans who share our commitment to fair labor and sustainable practices.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <span className="text-emerald-600 font-bold">02</span>
                </div>
                <h3 className="font-semibold text-zinc-900 mb-3">Premium Quality</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">Every item undergoes rigorous quality checks to ensure it meets our high standards of durability.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <span className="text-emerald-600 font-bold">03</span>
                </div>
                <h3 className="font-semibold text-zinc-900 mb-3">Global Shipping</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">We deliver our curated collections to your doorstep, no matter where you are in the world.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
