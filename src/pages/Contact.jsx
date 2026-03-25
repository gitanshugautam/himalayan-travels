import { FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="w-full flex justify-center px-4 py-10 pt-24">
      <div className="w-full max-w-6xl">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition">
              Send Message
            </button>

          </div>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-4">

            <div className="flex items-center gap-3">
              <FaPhone className="text-xl text-blue-600" />
              <p className="text-gray-700">8627861923</p>
            </div>

            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-xl text-green-500" />
              <a
                href="https://wa.me/918627861923"
                target="_blank"
                className="text-gray-700 hover:text-green-600"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaInstagram className="text-xl text-pink-500" />
              <p className="text-gray-700">@your_instagram</p>
            </div>

            <p className="text-gray-600 mt-4">
              Feel free to reach out for bookings, queries, or custom travel plans.
              We’re here to make your journey smooth and memorable ✈️
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}