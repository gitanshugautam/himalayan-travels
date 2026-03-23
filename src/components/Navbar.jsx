

export default function Navbar() {
  return (
   <div className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md">
  <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

    {/* Logo */}
    <h1 className="text-lg md:text-xl font-bold tracking-wide">
      Himalayan Travels
    </h1>

    {/* Menu */}
  <div className="flex gap-4 md:gap-6 text-sm md:text-base font-medium">

  <a href="#" className="hover:text-yellow-300 hover:underline transition">Home</a>
  <a href="#" className="hover:text-yellow-300 hover:underline transition">Blog</a>
  <a href="#" className="hover:text-yellow-300 hover:underline transition">Destinations</a>
  <a href="#" className="hover:text-yellow-300 hover:underline transition">About</a>
  <a href="#" className="hover:text-yellow-300 hover:underline transition">Contact</a>

</div>

  </div>
</div>
  );
}