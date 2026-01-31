import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Link from 'next/link';

export const metadata: Metadata = generateMetadata({
  title: 'Portfolio',
  description: 'Explore our portfolio of successful projects and case studies',
  path: '/portfolio',
});

const portfolioItems = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A scalable e-commerce solution with advanced features and seamless user experience',
    image: 'bg-gradient-to-br from-blue-400 to-purple-500',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    description: 'Secure and user-friendly mobile banking application with biometric authentication',
    image: 'bg-gradient-to-br from-green-400 to-blue-500',
    tags: ['React Native', 'Firebase', 'Security'],
  },
  {
    id: 3,
    title: 'Cloud Migration',
    category: 'Cloud Solutions',
    description: 'Complete infrastructure migration to AWS with zero downtime',
    image: 'bg-gradient-to-br from-orange-400 to-red-500',
    tags: ['AWS', 'DevOps', 'Kubernetes'],
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    category: 'Data Analytics',
    description: 'Real-time business intelligence dashboard with interactive visualizations',
    image: 'bg-gradient-to-br from-purple-400 to-pink-500',
    tags: ['Python', 'D3.js', 'PostgreSQL'],
  },
  {
    id: 5,
    title: 'Healthcare Management System',
    category: 'Web Development',
    description: 'Comprehensive healthcare management platform for hospitals and clinics',
    image: 'bg-gradient-to-br from-teal-400 to-cyan-500',
    tags: ['Vue.js', 'Django', 'HIPAA'],
  },
  {
    id: 6,
    title: 'IoT Smart Home Solution',
    category: 'IoT Development',
    description: 'Integrated smart home system with AI-powered automation',
    image: 'bg-gradient-to-br from-indigo-400 to-purple-500',
    tags: ['IoT', 'Machine Learning', 'Cloud'],
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-primary-600 to-accent-600 text-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-primary-50">
            Showcasing our best work and successful projects
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <Link href={`/portfolio/${item.id}`}>
                <div 
                  className={`${item.image} aspect-video rounded-lg mb-4`}
                  role="img"
                  aria-label={`${item.title} project preview`}
                ></div>
                <div className="text-sm text-primary-600 font-semibold mb-2">
                  {item.category}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's work together to bring your vision to life
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </Link>
        </div>
      </Section>
    </>
  );
}
