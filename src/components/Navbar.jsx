

export default function Navbar() {
  return (
<div className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md">
  <div className="max-w-7xl mx-auto px-3 py-3 flex items-center justify-between">

    {/* Logo */}
    <h1 className="text-sm sm:text-base md:text-xl font-bold tracking-wide whitespace-nowrap">
      Himalayan Travels
    </h1>

    {/* Menu */}
    <div className="flex gap-3 text-xs sm:text-sm md:text-base font-medium ml-4 overflow-x-auto scrollbar-hide">
      <a href="#" className="whitespace-nowrap hover:text-yellow-300 transition">Home</a>
      <a href="#" className="whitespace-nowrap hover:text-yellow-300 transition">Blog</a>
      <a href="#" className="whitespace-nowrap hover:text-yellow-300 transition">Destinations</a>
      <a href="#" className="whitespace-nowrap hover:text-yellow-300 transition">About</a>
      <a href="#" className="whitespace-nowrap hover:text-yellow-300 transition">Contact</a>
    </div>

  </div>
</div>
  );
}