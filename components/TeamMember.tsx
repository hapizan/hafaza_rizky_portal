import { FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';
import Card from './Card';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export default function TeamMember({
  name,
  role,
  bio,
  image,
  social,
}: TeamMemberProps) {
  return (
    <Card>
      <div className="text-center">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-4xl text-white font-bold">
          {name.charAt(0)}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-primary-600 font-semibold mb-4">{role}</p>
        <p className="text-gray-600 mb-6">{bio}</p>
        {social && (
          <div className="flex justify-center space-x-4">
            {social.twitter && (
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-600 transition-colors"
                aria-label={`${name}'s Twitter`}
              >
                <FiTwitter className="w-5 h-5" />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-600 transition-colors"
                aria-label={`${name}'s LinkedIn`}
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            )}
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-600 transition-colors"
                aria-label={`${name}'s GitHub`}
              >
                <FiGithub className="w-5 h-5" />
              </a>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}
