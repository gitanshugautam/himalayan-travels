import { useEffect, useState } from "react";
import { FaInstagram, FaWhatsapp,  FaFacebook } from "react-icons/fa";
import Packages from "./Packages";

export default function Hero() {
  const images = [
    "/images/Himachal1.jpg",
    "/images/Himachal2.jpg",
    "/images/Himachal3.jpg",
    "/images/Himachal4.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full text-black">

      {/* 🔥 Carousel */}
      <div className="w-full flex justify-center mt-4">
        <div className="relative w-[98%] sm:w-[95%] md:w-[90%] lg:w-[85%] h-[340px] sm:h-[420px] md:h-[480px] lg:h-[580px] rounded-xl overflow-hidden shadow-lg">
          
          {/* background */}
          <img
            src={images[index]}
            alt="bg"
            className="absolute inset-0 w-full h-full object-cover scale-110 brightness-110 contrast-110"
          />

          {/* main image */}
          <img
            src={images[index]}
            alt="Himachal"
            className="relative w-full h-full object-cover brightness-110 contrast-110"
          />

          {/* text center */}
          <div className="absolute inset-0 flex items-end justify-center pb-6">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-extrabold text-white drop-shadow-2xl">
              Himachal Pradesh
            </h1>
          </div>

        </div>
      </div>

      {/* 🔥 Destinations */}
   {/* 🔥 Destinations */}
<div id="destinations" className="scroll-mt-24 w-full flex justify-center mt-6">
  <div className="w-[98%] sm:w-[95%] md:w-[90%] lg:w-[85%]">

    {/* Top 4 images */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

      {[
        { name: "Jammu", img: "/images/j.jpg" },
        { name: "Ladakh", img: "/images/ladakh.jpg" },
        { name: "Uttarakhand", img: "/images/UTTARAKHAND.jpg" },
        { name: "Rajasthan", img: "/images/rajasthan.jpg" },
      ].map((item, i) => (
        <div key={i} className="relative rounded-lg overflow-hidden group cursor-pointer">
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-40 sm:h-52 md:h-64 lg:h-72 object-cover brightness-110 contrast-110 transition duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-end justify-center pb-2">
            <p className="text-xs sm:text-sm md:text-lg font-semibold text-white drop-shadow-md">
              {item.name}
            </p>
          </div>
        </div>
      ))}

    </div>

    {/* 4 Dham */}
    <div className="mt-6">
      <div className="relative w-full rounded-xl overflow-hidden shadow-lg">

        <img
          src="/images/4_dham.jpg"
          alt="4 Dham Yatra"
          className="w-full h-72 sm:h-96 md:h-[480px] lg:h-[560px] object-cover"
        />

        <div className="absolute inset-0 flex items-end justify-center pb-3">
         <h2 className="text-lg sm:text-2xl md:text-4xl font-extrabold text-white drop-shadow-2xl">
            4 Dham Yatra
          </h2>
        </div>

      </div>
    </div>

  </div>
</div>
<Packages />
      {/* 🔥 Social */}
      <div className="flex items-center justify-center gap-8 pt-6">

  <FaInstagram className="text-3xl sm:text-4xl md:text-5xl cursor-pointer hover:scale-110 transition" />

  <FaFacebook className="text-3xl sm:text-4xl md:text-5xl cursor-pointer hover:scale-110 transition" />

  <FaWhatsapp className="text-3xl sm:text-4xl md:text-5xl hover:scale-110 transition" />

</div>

      {/* 🔥 End Text */}
      <div className="w-full text-center mt-8 pb-6 px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
          Let’s Make Your Journey Unforgettable ✈️
        </h2>

        <p className="text-sm sm:text-base text-gray-600 mt-2">
          Travel with comfort, explore with freedom, and create memories for life.
        </p>
      </div>

    </div>
  );
}