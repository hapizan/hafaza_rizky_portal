import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Hero from '@/components/Hero';
import { OrganizationSchema, WebSiteSchema } from '@/components/SEO/StructuredData';

export const metadata: Metadata = generateMetadata({
  title: 'Home',
  description: 'Welcome to YourCompany - Building innovative solutions for the future',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <Hero />
      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of services to help your business grow
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Service {i}
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </Card>
          ))}
        </div>
      </Section>
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Check out some of our recent work
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <div 
                className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg mb-4"
                role="img"
                aria-label={`Project ${i} preview image`}
              ></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Project {i}
              </h3>
              <p className="text-gray-600">
                A brief description of the project and its impact on the client's
                business.
              </p>
            </Card>
          ))}
        </div>
      </Section>
      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Client Name {i}</p>
                <p className="text-sm text-gray-600">Company Name</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
