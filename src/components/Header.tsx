import { ShoppingBag, User, Search, Menu } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  return (
    <header id="main-header" className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tighter">L&J’s</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Shop', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button className="p-2 text-zinc-500 hover:text-zinc-900 transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-zinc-500 hover:text-zinc-900 transition-colors">
              <User size={20} />
            </button>
            <button className="p-2 text-zinc-500 hover:text-zinc-900 transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full"></span>
            </button>
            <button className="md:hidden p-2 text-zinc-500 hover:text-zinc-900 transition-colors">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
