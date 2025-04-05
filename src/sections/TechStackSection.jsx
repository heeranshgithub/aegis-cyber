export default function TechStackSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Tech Stack</h2>
        <p className="text-gray-400 text-center mb-12">
          Cutting-edge technologies we use to protect your business
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            'SIEM',
            'Firewall',
            'IDS/IPS',
            'Zero Trust',
            'Threat Intelligence',
            'SOC',
            'Encryption',
            'IAM',
          ].map((tech, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg text-center">
              <p className="font-semibold">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
