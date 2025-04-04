import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
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
  )
}
