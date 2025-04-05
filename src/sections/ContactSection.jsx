export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 bg-gray-900 rounded-lg"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-3 bg-gray-900 rounded-lg"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-gray-900 rounded-lg"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 bg-gray-900 rounded-lg"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-3 bg-gray-900 rounded-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
