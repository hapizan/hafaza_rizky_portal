import Card from './Card';

interface TestimonialCardProps {
  name: string;
  company: string;
  role?: string;
  content: string;
  rating?: number;
  image?: string;
}

export default function TestimonialCard({
  name,
  company,
  role,
  content,
  rating = 5,
  image,
}: TestimonialCardProps) {
  return (
    <Card>
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-xl">
            ⭐
          </span>
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
        &ldquo;{content}&rdquo;
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white font-bold mr-4">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">
            {role && `${role}, `}
            {company}
          </p>
        </div>
      </div>
    </Card>
  );
}
