import { useState } from "react";
import { FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `New Contact Message:

Name: ${form.name}
Email: ${form.email}
Message: ${form.message}`;

    const url = `https://wa.me/917018546930?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="w-full flex justify-center px-4 py-10 pt-24">
      <div className="w-full max-w-6xl">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg p-6 space-y-4"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              onChange={handleChange}
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 transition"
            >
              Send on WhatsApp
            </button>

          </form>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-4">

            {/* Phone */}
            <div className="flex items-center gap-3">
              <FaPhone className="text-xl text-blue-600" />
              <a href="tel:7018546930" className="text-gray-700 hover:text-blue-600">
                7018546930
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-xl text-green-500" />
              <a
                href="https://wa.me/917018546930"
                target="_blank"
                className="text-gray-700 hover:text-green-600"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-3">
              <FaInstagram className="text-xl text-pink-500" />
              <a
                href="https://www.instagram.com/himal_ayantourandtravel"
                target="_blank"
                className="text-gray-700 hover:text-pink-500"
              >
                @himal_ayantourandtravel
              </a>
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