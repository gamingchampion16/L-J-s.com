import React from 'react';
import { motion } from 'motion/react';
import { Plus, Heart } from 'lucide-react';

interface ProductProps {
  name: string;
  price: number;
  category: string;
  image: string;
}

const ProductCard: React.FC<ProductProps> = ({ name, price, category, image }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="aspect-[4/5] overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-zinc-400 hover:text-rose-500 transition-colors">
          <Heart size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-1">{category}</p>
            <h3 className="font-medium text-zinc-900 group-hover:text-emerald-600 transition-colors">{name}</h3>
          </div>
          <p className="font-semibold text-zinc-900">${price.toFixed(2)}</p>
        </div>

        <button className="w-full mt-4 flex items-center justify-center gap-2 py-3 bg-zinc-900 text-white text-sm font-semibold rounded-xl hover:bg-emerald-600 transition-colors group/btn">
          <Plus size={16} className="group-hover/btn:rotate-90 transition-transform" />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
