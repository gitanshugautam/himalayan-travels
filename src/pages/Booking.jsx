import { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    destination: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hello, I want to book a trip:

Name: ${form.name}
Phone: ${form.phone}
Destination: ${form.destination}
Date: ${form.date}
Message: ${form.message}`;

    const url = `https://wa.me/917018546930?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="w-full flex justify-center py-10 px-4 pt-24">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-xl p-6">

        <h1 className="text-2xl font-bold text-center mb-6">
          Book Your Trip ✈️
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <select
            name="destination"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          >
            <option>Select Destination</option>
            <option>Himachal</option>
            <option>Ladakh</option>
            <option>Kashmir</option>
            <option>Char Dham</option>
          </select>

          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <textarea
            name="message"
            placeholder="Message"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          ></textarea>

          <button className="w-full bg-green-500 text-white py-3 rounded">
            Send on WhatsApp
          </button>

        </form>

      </div>
    </div>
  );
}