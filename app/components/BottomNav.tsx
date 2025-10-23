'use client';

import { useEffect, useState } from 'react';

interface BottomNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function BottomNav({ activeSection, onNavigate }: BottomNavProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'challenges', label: 'Challenges', icon: '⚠️' },
    { id: 'solutions', label: 'Solutions', icon: '💡' },
    { id: 'forecasts', label: 'Forecasts', icon: '🔮' },
    { id: 'analysis', label: 'Analysis', icon: '📊' }
  ];

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 bg-white border-t-2 border-neutral-200 shadow-2xl
                  transition-transform duration-300 z-50 md:hidden
                  ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
      role="navigation"
      aria-label="Bottom navigation"
    >
      <div className="flex justify-around items-center px-2 py-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center justify-center px-3 py-2 rounded-lg
                       transition-all duration-200 flex-1 max-w-[80px]
                       focus:outline-none focus:ring-2 focus:ring-primary-500
                       ${activeSection === item.id
                         ? 'bg-primary-100 text-primary-700'
                         : 'text-neutral-600 hover:bg-neutral-100'
                       }`}
            aria-label={`Navigate to ${item.label}`}
            aria-current={activeSection === item.id ? 'page' : undefined}
          >
            <span className="text-2xl mb-1" role="img" aria-hidden="true">
              {item.icon}
            </span>
            <span className="text-xs font-medium truncate w-full text-center">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
