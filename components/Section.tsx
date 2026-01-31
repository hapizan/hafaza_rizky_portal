import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = '', id }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20 ${className}`}
    >
      <div className="container mx-auto">{children}</div>
    </section>
  );
}
