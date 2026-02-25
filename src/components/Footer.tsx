export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-serif text-3xl font-bold text-white mb-6">L&J’s</h2>
            <p className="text-sm leading-relaxed mb-6">
              Elevating your everyday style with curated pieces that blend timeless elegance with modern trends.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Shop</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Newsletter</h4>
            <p className="text-sm mb-4">Join our community for exclusive offers and style tips.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-zinc-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-500 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 L&J’s — All Rights Reserved</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
