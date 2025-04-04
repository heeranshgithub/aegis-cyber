import { Shield, Code, Server, Lock, Mail, Phone, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Menu Bar */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Aegis Cyber</div>
          <div className="space-x-6">
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About Us
            </a>
            <a
              href="#contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="about"
        className="pt-32 pb-20 bg-gradient-to-b from-gray-900 to-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Secure Your Digital Future
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional cybersecurity services to protect your business from
              evolving threats
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Security Assessment",
                description:
                  "Comprehensive security audits and vulnerability assessments",
              },
              {
                icon: Code,
                title: "Secure Development",
                description: "Secure coding practices and application security",
              },
              {
                icon: Server,
                title: "Infrastructure Security",
                description:
                  "Protection for your cloud and network infrastructure",
              },
              {
                icon: Lock,
                title: "Data Protection",
                description: "Advanced encryption and data security solutions",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg hover:transform hover:scale-105 transition-transform"
              >
                <service.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our Tech Stack
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Cutting-edge technologies we use to protect your business
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "AWS",
              "Azure",
              "Docker",
              "Kubernetes",
              "Python",
              "Go",
              "React",
              "Node.js",
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg text-center"
              >
                <p className="font-semibold">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Aegis Cyber</h3>
              <p className="text-gray-400">Protecting your digital assets</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" /> contact@aegiscyber.com
                </p>
                <p className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" /> +1 (555) 123-4567
                </p>
                <p className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" /> 123 Security Street, Tech
                  City
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
