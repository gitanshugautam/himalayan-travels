import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen">

      <Navbar />

      {/* 🔥 Welcome Text */}
     <div className="w-full flex justify-center mt-6 px-4">
  <div className="text-center">

    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">
      Welcome to
    </h1>

    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
      Himalayan Tour & Travels
    </h2>

    <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-3">
      Your Dream Destination, Our Responsibility 🌄
    </p>

  </div>
</div>
      <Hero />

    </div>
  );
}

export default App;