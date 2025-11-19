import { Profile } from '../types';
import SocialLink from './SocialLink';

interface ProfileCardProps {
  profile: Profile;
}

export default function ProfileCard({ profile }: ProfileCardProps): JSX.Element {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 animate-fadeIn max-w-md mx-auto">

      {/* Top Banner */}
      <div className="relative w-full">
        <div
          className="w-full h-32 md:h-40 lg:h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${profile.banner})` }}
        ></div>

        {/* Profile Image */}
        <div className="absolute left-6 bottom-0 translate-y-1/2">
          <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-8 pt-20 pb-8 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          {profile.name}
        </h1>

        <p className="text-slate-600 text-center mb-8 leading-relaxed max-w-sm">
          {profile.description}
        </p>

        <div className="w-full space-y-3 mb-6">
          {profile.links.map((link, index) => (
            <SocialLink key={index} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
}