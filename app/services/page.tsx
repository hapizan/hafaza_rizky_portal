import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import Section from '@/components/Section';
import Card from '@/components/Card';
import { StructuredData } from '@/components/SEO/StructuredData';
import { FiCode, FiSmartphone, FiCloud, FiShield, FiTrendingUp, FiBarChart } from 'react-icons/fi';

export const metadata: Metadata = generateMetadata({
  title: 'Services',
  description: 'Comprehensive range of services to help your business grow and succeed',
  path: '/services',
});

const services = [
  {
    icon: FiCode,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices',
    features: ['Responsive Design', 'Performance Optimization', 'SEO Friendly'],
  },
  {
    icon: FiSmartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps for iOS and Android',
    features: ['Native Apps', 'Cross-Platform', 'App Store Optimization'],
  },
  {
    icon: FiCloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services',
    features: ['AWS/Azure/GCP', 'Migration Services', '24/7 Support'],
  },
  {
    icon: FiShield,
    title: 'Security Services',
    description: 'Comprehensive security solutions to protect your business',
    features: ['Security Audits', 'Penetration Testing', 'Compliance'],
  },
  {
    icon: FiTrendingUp,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to grow your online presence',
    features: ['SEO/SEM', 'Social Media', 'Content Marketing'],
  },
  {
    icon: FiBarChart,
    title: 'Analytics & Insights',
    description: 'Turn data into actionable insights for better decision making',
    features: ['Data Analytics', 'Business Intelligence', 'Reporting'],
  },
];

export default function ServicesPage() {
  return (
    <>
      {services.map((service, index) => (
        <StructuredData
          key={index}
          type="Service"
          data={{
            name: service.title,
            description: service.description,
            provider: {
              '@type': 'Organization',
              name: 'YourCompany',
            },
          }}
        />
      ))}
      <Section className="bg-gradient-to-br from-primary-600 to-accent-600 text-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-primary-50">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index}>
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg mb-6 flex items-center justify-center text-white">
                  <Icon className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-primary-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how we can help transform your business
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Contact Us
          </a>
        </div>
      </Section>
    </>
  );
}
