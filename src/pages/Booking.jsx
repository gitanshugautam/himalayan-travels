export default function Booking() {
  return (
    <div className="w-full flex justify-center py-10 px-4 pt-24">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-xl p-6">

        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Book Your Trip ✈️
        </h1>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Select Destination</option>
            <option>Himachal</option>
            <option>Ladakh</option>
            <option>Kashmir</option>
            <option>Char Dham</option>
          </select>

          <input
            type="date"
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="Additional Message"
            rows="3"
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
          >
            Confirm Booking
          </button>

        </form>

      </div>
    </div>
  );
}