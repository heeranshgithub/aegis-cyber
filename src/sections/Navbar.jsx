import Link from 'next/link'

export default function Menubar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Aegis Cyber</div>
        <div className="space-x-6">
          <Link href="#about" className="hover:text-blue-400 transition-colors">
            About Us
          </Link>
          <Link
            href="#contact"
            className="hover:text-blue-400 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  )
}
