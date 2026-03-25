import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white mt-12">

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h1 className="text-xl font-bold tracking-wide">
            Himalayan Travels
          </h1>
          <p className="text-sm text-gray-400 mt-3 leading-relaxed">
            Explore the beauty of India with comfort and trust.  
            Your Dream Destination, Our Responsibility 🌄
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="font-semibold mb-3 text-white">Quick Links</h2>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Destinations</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Destinations */}
        <div>
          <h2 className="font-semibold mb-3 text-white">Top Destinations</h2>
          <ul className="text-sm text-gray-400 space-y-2">
            <li className="hover:text-white transition cursor-pointer">Himachal</li>
            <li className="hover:text-white transition cursor-pointer">Kashmir</li>
            <li className="hover:text-white transition cursor-pointer">Ladakh</li>
            <li className="hover:text-white transition cursor-pointer">Char Dham</li>
            <li className="hover:text-white transition cursor-pointer">Rajasthan</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-semibold mb-3 text-white">Contact</h2>

          <p className="text-sm text-gray-400">📞 8627861923</p>
          <p className="text-sm text-gray-400 mt-1">📩 just_testing@gmail.com</p>

          <div className="flex gap-4 mt-4 text-2xl">

            <FaInstagram className="cursor-pointer hover:scale-110 hover:text-pink-500 transition" />

            <FaFacebook className="cursor-pointer hover:scale-110 hover:text-blue-500 transition" />

            <a href="https://wa.me/918627861923" target="_blank">
              <FaWhatsapp className="cursor-pointer hover:scale-110 hover:text-green-500 transition" />
            </a>

          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-700"></div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 py-4">
        © 2026 Himalayan Tour & Travels • Designed for unforgettable journeys ✈️
      </div>

    </div>
  );
}