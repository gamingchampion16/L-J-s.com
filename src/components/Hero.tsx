import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-[70vh] sm:h-[80vh] flex items-center overflow-hidden bg-zinc-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/fashion/1920/1080"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest text-white uppercase bg-emerald-600 rounded-full">
            New Collection 2026
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl font-bold text-white leading-tight mb-6">
            Shop Your <br />
            <span className="italic text-emerald-400">Unique</span> Style
          </h2>
          <p className="text-lg sm:text-xl text-zinc-300 mb-10 max-w-lg leading-relaxed">
            Discover curated pieces that define your personality. Quality craftsmanship meets modern aesthetics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-white text-zinc-900 font-semibold rounded-full hover:bg-zinc-100 transition-all flex items-center justify-center group">
              Explore Shop
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </button>
            <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all">
              View Lookbook
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
