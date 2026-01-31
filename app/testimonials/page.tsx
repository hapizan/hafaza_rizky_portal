import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import Section from '@/components/Section';
import TestimonialCard from '@/components/TestimonialCard';
import { StructuredData } from '@/components/SEO/StructuredData';

export const metadata: Metadata = generateMetadata({
  title: 'Testimonials',
  description: 'Read what our clients say about working with us',
  path: '/testimonials',
});

const testimonials = [
  {
    name: 'Robert Chen',
    company: 'TechCorp Inc.',
    role: 'CEO',
    content:
      'Working with YourCompany has been a game-changer for our business. Their innovative solutions and attention to detail exceeded all our expectations. The team is professional, responsive, and truly understands our needs.',
    rating: 5,
  },
  {
    name: 'Maria Garcia',
    company: 'StartupXYZ',
    role: 'Founder',
    content:
      'The mobile app they developed for us has transformed how we interact with our customers. The user experience is flawless, and the technical implementation is top-notch. Highly recommended!',
    rating: 5,
  },
  {
    name: 'James Wilson',
    company: 'Enterprise Solutions',
    role: 'CTO',
    content:
      'Their cloud migration expertise helped us modernize our infrastructure seamlessly. Zero downtime, excellent communication, and a team that truly cares about our success. Outstanding work!',
    rating: 5,
  },
  {
    name: 'Lisa Anderson',
    company: 'Digital Marketing Pro',
    role: 'Marketing Director',
    content:
      'The analytics dashboard they built gives us insights we never had before. It has revolutionized our decision-making process. The team was collaborative and delivered exactly what we needed.',
    rating: 5,
  },
  {
    name: 'Michael Thompson',
    company: 'Healthcare Plus',
    role: 'Operations Manager',
    content:
      'Implementing their healthcare management system was smooth and efficient. The platform is intuitive, secure, and has significantly improved our operations. Excellent service throughout!',
    rating: 5,
  },
  {
    name: 'Jennifer Lee',
    company: 'Smart Home Solutions',
    role: 'Product Manager',
    content:
      'The IoT solution they developed is innovative and reliable. Our customers love the smart home features, and the system has been running flawlessly. Great partnership!',
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {testimonials.map((testimonial, index) => (
        <StructuredData
          key={index}
          type="Review"
          data={{
            author: {
              '@type': 'Person',
              name: testimonial.name,
            },
            reviewBody: testimonial.content,
            reviewRating: {
              '@type': 'Rating',
              ratingValue: testimonial.rating,
              bestRating: 5,
            },
            itemReviewed: {
              '@type': 'Organization',
              name: 'YourCompany',
            },
          }}
        />
      ))}
      <Section className="bg-gradient-to-br from-primary-600 to-accent-600 text-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Testimonials
          </h1>
          <p className="text-xl md:text-2xl text-primary-50">
            What our clients say about working with us
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's work together to achieve your business goals
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </a>
        </div>
      </Section>
    </>
  );
}
