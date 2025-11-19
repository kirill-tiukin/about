import React, { useRef, useState } from 'react';
import ProfileCard from './components/ProfileCard';
import { profiles } from './data/profiles';

export default function App(): JSX.Element {
  const [currentProfile, setCurrentProfile] = useState<number>(0);

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const isScrolling = useRef<boolean>(false);

  const nextProfile = () => {
    setCurrentProfile((prev) => (prev + 1) % profiles.length);
  };

  const prevProfile = () => {
    setCurrentProfile((prev) => (prev - 1 + profiles.length) % profiles.length);
  };

  // Only show right arrow on first profile
  const showRightArrow = currentProfile === 0;
  // Only show left arrow on second profile
  const showLeftArrow = currentProfile === 1;
  // If you want different behavior (e.g. show left for all after first),
  // change these booleans accordingly.

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const t = e.changedTouches[0];
    touchStartX.current = t.clientX;
    touchStartY.current = t.clientY;
    isScrolling.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const t = e.changedTouches[0];
    const deltaY = Math.abs(t.clientY - touchStartY.current);
    if (deltaY > 10) {
      isScrolling.current = true; // user is scrolling vertically
    }
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isScrolling.current) {
      isScrolling.current = false;
      return;
    }
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 30; // px
    if (distance > threshold) {
      // left swipe => next
      nextProfile();
    } else if (distance < -threshold) {
      // right swipe => prev
      prevProfile();
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="w-full max-w-md">
        <ProfileCard
          profile={profiles[currentProfile]}
          currentIndex={currentProfile}
          total={profiles.length}
          nextProfile={nextProfile}
          prevProfile={prevProfile}
          goToProfile={setCurrentProfile}
          showLeftArrow={showLeftArrow}
          showRightArrow={showRightArrow}
        />
      </div>
    </div>
  ); 
}
