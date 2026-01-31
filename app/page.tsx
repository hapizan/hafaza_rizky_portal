'use client';

import { useState, FormEvent } from 'react';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Hero from '@/components/Hero';
import TeamMember from '@/components/TeamMember';
import TestimonialCard from '@/components/TestimonialCard';
import { FiCode, FiSmartphone, FiBook, FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { OrganizationSchema, WebSiteSchema } from '@/components/SEO/StructuredData';

// Services data
const services = [
  {
    icon: FiCode,
    title: 'Web Application',
    description: 'Custom web applications built with modern technologies and best practices. We create scalable, secure, and user-friendly web solutions tailored to your business needs.',
    features: ['Custom Development', 'Responsive Design', 'Performance Optimization', 'SEO Friendly', 'Secure & Scalable'],
  },
  {
    icon: FiSmartphone,
    title: 'Mobile Application',
    description: 'Native and cross-platform mobile applications for iOS and Android. We deliver high-quality mobile solutions that enhance user experience and drive engagement.',
    features: ['iOS & Android', 'Cross-Platform Development', 'App Store Optimization', 'User Experience Design', 'Performance Tuning'],
  },
  {
    icon: FiBook,
    title: 'Training',
    description: 'Comprehensive training programs to upskill your team. We offer expert-led training sessions covering the latest technologies and best practices in web and mobile development.',
    features: ['Technical Training', 'Hands-on Workshops', 'Best Practices', 'Certification Programs', 'Customized Curriculum'],
  },
];

// Team data
const teamMembers = [
  {
    name: 'Ts. Mohammad Izzat',
    role: 'Head of Project Management',
    bio: 'Leading project management initiatives with expertise in delivering successful technology solutions on time and within budget.',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Noorfaiz Kadir',
    role: 'Head of Solution Expertise',
    bio: 'Expert in designing and implementing innovative solutions that address complex business challenges and drive digital transformation.',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Hapizan Seman',
    role: 'Head of Technology',
    bio: 'Technology leader specializing in modern web and mobile development, ensuring cutting-edge solutions and technical excellence.',
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
];

// Testimonials data
const testimonials = [
  {
    name: 'Robert Chen',
    company: 'TechCorp Inc.',
    role: 'CEO',
    content: 'Working with Hafaza Rizky Trading has been a game-changer for our business. Their innovative solutions and attention to detail exceeded all our expectations.',
    rating: 5,
  },
  {
    name: 'Maria Garcia',
    company: 'StartupXYZ',
    role: 'Founder',
    content: 'The mobile app they developed for us has transformed how we interact with our customers. The user experience is flawless, and the technical implementation is top-notch.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    company: 'Enterprise Solutions',
    role: 'CTO',
    content: 'Their expertise helped us modernize our infrastructure seamlessly. Zero downtime, excellent communication, and a team that truly cares about our success.',
    rating: 5,
  },
];

// Portfolio data
const portfolioItems = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Application',
    description: 'A scalable e-commerce solution with advanced features and seamless user experience',
    image: 'bg-gradient-to-br from-blue-400 to-purple-500',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'Mobile Application',
    description: 'Secure and user-friendly mobile banking application with biometric authentication',
    image: 'bg-gradient-to-br from-green-400 to-blue-500',
    tags: ['React Native', 'Firebase', 'Security'],
  },
  {
    id: 3,
    title: 'Training Management System',
    category: 'Training',
    description: 'Comprehensive training management platform for educational institutions',
    image: 'bg-gradient-to-br from-orange-400 to-red-500',
    tags: ['Vue.js', 'Django', 'LMS'],
  },
];

// Values data
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

// Contact info
const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'hafazarizky@gmail.com',
    link: 'mailto:hafazarizky@gmail.com',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    icon: FiMapPin,
    label: 'Address',
    value: '123 Business St, City, State 12345',
    link: '#',
  },
];

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:hafazarizky@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show success message
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Section id="services" className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive solutions to help your business grow
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index}>
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg mb-6 flex items-center justify-center text-white">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
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

      {/* About Section */}
      <Section id="about">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About Us
            </h2>
            <p className="text-lg text-gray-600">
              Hafaza Rizky Trading (002898689-P)
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our mission is to empower businesses with cutting-edge technology solutions that drive growth, enhance efficiency, and create lasting value. We believe in the power of innovation to transform industries and improve lives.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              To become the leading provider of innovative technology solutions, recognized for our commitment to excellence, integrity, and client success.
            </p>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Our Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {values.map((value, index) => (
                <Card key={index}>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Portfolio Section */}
      <Section id="portfolio" className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing our best work and successful projects
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div 
                className={`${item.image} aspect-video rounded-lg mb-4`}
                role="img"
                aria-label={`${item.title} project preview`}
              ></div>
              <div className="text-sm text-primary-600 font-semibold mb-2">
                {item.category}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
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
            </Card>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section id="team">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The talented individuals driving our success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonials" className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} hover={false}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {info.label}
                      </h4>
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="What is this regarding?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us more about your project..."
                  />
                </div>
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    <p className="font-semibold mb-1">Thank you for your message!</p>
                    <p className="text-sm">Your email client should open with the message pre-filled. If it doesn't, please email us directly at <a href="mailto:hafazarizky@gmail.com" className="underline font-semibold">hafazarizky@gmail.com</a></p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    Something went wrong. Please try again.
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 touch-manipulation"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <FiSend className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
