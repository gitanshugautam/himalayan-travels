import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={
            <div>

              {/* 🔥 HERO VIDEO */}
              <div className="relative w-full">

                {/* Mobile */}
                <div className="block md:hidden w-full mt-16">
                  <video autoPlay loop muted playsInline className="w-full h-screen object-cover">
                    <source src="/videos/video1.mp4" type="video/mp4" />
                  </video>
                </div>

                {/* Laptop */}
                <div className="hidden md:flex w-full h-screen mt-20">
                  <video autoPlay loop muted className="w-1/3 h-full object-cover">
                    <source src="/videos/video1.mp4" type="video/mp4" />
                  </video>
                  <video autoPlay loop muted className="w-1/3 h-full object-cover">
                    <source src="/videos/video2.mp4" type="video/mp4" />
                  </video>
                  <video autoPlay loop muted className="w-1/3 h-full object-cover">
                    <source src="/videos/video3.mp4" type="video/mp4" />
                  </video>
                </div>

                {/* TEXT */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
                    Welcome to
                  </h1>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mt-2 text-white drop-shadow-lg">
                    Himalayan Tour & Travels
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-white mt-3 drop-shadow">
                    Your Dream Destination, Our Responsibility 🌄
                  </p>
                </div>

              </div>

              <Hero />

            </div>
          }
        />

        {/* Booking Page */}
        <Route path="/booking" element={<Booking />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;