import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import Section from '@/components/Section';
import TeamMember from '@/components/TeamMember';
import { StructuredData } from '@/components/SEO/StructuredData';

export const metadata: Metadata = generateMetadata({
  title: 'Our Team',
  description: 'Meet the talented team behind our success',
  path: '/team',
});

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years of experience in technology and business strategy',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    bio: 'Tech enthusiast passionate about building scalable and innovative solutions',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
  {
    name: 'Mike Johnson',
    role: 'Lead Developer',
    bio: 'Full-stack developer specializing in modern web technologies and cloud architecture',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
  {
    name: 'Sarah Williams',
    role: 'Design Director',
    bio: 'Creative designer focused on user experience and beautiful, functional interfaces',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    name: 'David Brown',
    role: 'Marketing Lead',
    bio: 'Digital marketing expert driving growth through data-driven strategies',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Emily Davis',
    role: 'Project Manager',
    bio: 'Experienced project manager ensuring timely delivery and client satisfaction',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
];

export default function TeamPage() {
  return (
    <>
      {teamMembers.map((member, index) => (
        <StructuredData
          key={index}
          type="Person"
          data={{
            name: member.name,
            jobTitle: member.role,
            description: member.bio,
            worksFor: {
              '@type': 'Organization',
              name: 'YourCompany',
            },
          }}
        />
      ))}
      <Section className="bg-gradient-to-br from-primary-600 to-accent-600 text-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Team
          </h1>
          <p className="text-xl md:text-2xl text-primary-50">
            Meet the talented individuals driving our success
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join Our Team
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're always looking for talented individuals to join our growing team
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View Open Positions
          </a>
        </div>
      </Section>
    </>
  );
}
