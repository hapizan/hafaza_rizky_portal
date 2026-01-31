import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import Section from '@/components/Section';
import Card from '@/components/Card';

export const metadata: Metadata = generateMetadata({
  title: 'About Us',
  description: 'Learn about our company mission, vision, values, and the team behind our success',
  path: '/about',
});

export default function AboutPage() {
  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new possibilities',
      icon: '💡',
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do',
      icon: '⭐',
    },
    {
      title: 'Integrity',
      description: 'We build trust through transparency and honesty',
      icon: '🤝',
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of working together',
      icon: '👥',
    },
  ];

  const milestones = [
    { year: '2020', event: 'Company Founded' },
    { year: '2021', event: 'First Major Client' },
    { year: '2022', event: 'Team Expansion' },
    { year: '2023', event: 'Industry Recognition' },
    { year: '2024', event: 'Global Reach' },
  ];

  return (
    <>
      <Section className="bg-gradient-to-br from-primary-600 to-accent-600 text-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-primary-50">
            Building innovative solutions for the future
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Our mission is to empower businesses with cutting-edge technology
            solutions that drive growth, enhance efficiency, and create lasting
            value. We believe in the power of innovation to transform industries
            and improve lives.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
            Our Vision
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            To become the leading provider of innovative technology solutions
            globally, recognized for our commitment to excellence, integrity, and
            client success. We envision a future where technology seamlessly
            integrates with business to create extraordinary outcomes.
          </p>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((value, index) => (
            <Card key={index}>
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-6 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <div className="text-lg text-gray-900">
                        {milestone.event}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-gray-700">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-700">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">10+</div>
              <div className="text-gray-700">Team Members</div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
