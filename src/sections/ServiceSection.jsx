import { Shield, Code, Server, Lock } from 'lucide-react'
import ServiceCard from '../ui/ServiceCard'

export default function ServicesSection() {
  const services = [
    {
      icon: Shield,
      title: 'Security Assessment',
      description:
        'Comprehensive security audits and vulnerability assessments',
    },
    {
      icon: Code,
      title: 'Secure Development',
      description: 'Secure coding practices and application security',
    },
    {
      icon: Server,
      title: 'Infrastructure Security',
      description: 'Protection for your cloud and network infrastructure',
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Advanced encryption and data security solutions',
    },
  ]

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
