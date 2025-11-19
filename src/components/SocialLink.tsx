import * as Icons from 'lucide-react';
import { SocialLinkType } from '../types';

interface SocialLinkProps {
  link: SocialLinkType;
}

function SocialLink({ link }: SocialLinkProps) {
  const Icon = Icons[link.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 w-full px-6 py-4 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-md group"
    >
      <div className="flex-shrink-0">
        <Icon className="w-5 h-5 text-slate-700 group-hover:text-slate-900 transition-colors" />
      </div>
      <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
        {link.label}
      </span>
    </a>
  );
}

export default SocialLink;
