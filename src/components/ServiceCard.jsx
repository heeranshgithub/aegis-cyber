export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg hover:transform hover:scale-105 transition-transform">
      <Icon className="w-12 h-12 text-blue-400 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}
