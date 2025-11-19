import { Profile } from '../types';
import SocialLink from './SocialLink';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProfileCardProps {
  profile: Profile;
  currentIndex: number;
  total: number;
  nextProfile: () => void;
  prevProfile: () => void;
  goToProfile: (index: number) => void;
  showLeftArrow?: boolean;
  showRightArrow?: boolean;
}

export default function ProfileCard({
  profile,
  currentIndex,
  total,
  nextProfile,
  prevProfile,
  goToProfile,
  showLeftArrow = true,
  showRightArrow = true,
}: ProfileCardProps): JSX.Element {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 animate-fadeIn max-w-md mx-auto">

      {/* -------- TOP BANNER -------- */}
      <div className="relative w-full">

        {/* Full-width banner */}
        <div
          className="w-full h-32 md:h-40 lg:h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${profile.banner})` }}
        ></div>

        {/* Circular profile image */}
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

      {/* -------- CONTENT BELOW IMAGE -------- */}
      <div className="px-8 pt-20 pb-8 flex flex-col items-center">

        {/* Name */}
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          {profile.name}
        </h1>

        {/* Description */}
        <p className="text-slate-600 text-center mb-8 leading-relaxed max-w-sm">
          {profile.description}
        </p>

        {/* Social Links */}
        <div className="w-full space-y-3 mb-6">
          {profile.links.map((link, index) => (
            <SocialLink key={index} link={link} />
          ))}
        </div>

        {/* Navigation: Arrows + Dots */}
        <div className="w-full flex justify-between items-center mt-4">

          {/* Left Arrow */}
          <div className="w-12 flex justify-start">
            {showLeftArrow && (
              <button
                onClick={prevProfile}
                className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2">
            {Array.from({ length: total }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToProfile(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-slate-700 w-8"
                    : "bg-slate-300 w-2 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <div className="w-12 flex justify-end">
            {showRightArrow && (
              <button
                onClick={nextProfile}
                className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
