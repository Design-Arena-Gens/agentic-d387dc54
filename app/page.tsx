'use client';

import { useState } from 'react';
import HeroSection from './components/HeroSection';
import GlobalChallenges from './components/GlobalChallenges';
import Solutions from './components/Solutions';
import FutureForecasts from './components/FutureForecasts';
import DataVisualization from './components/DataVisualization';
import BottomNav from './components/BottomNav';

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState('world');
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen">
      <div id="home">
        <HeroSection onAnalyze={() => {
          setShowAnalysis(true);
          scrollToSection('analysis');
        }} />
      </div>

      <div id="challenges">
        <GlobalChallenges />
      </div>

      <div id="solutions">
        <Solutions />
      </div>

      <div id="forecasts">
        <FutureForecasts />
      </div>

      <div id="analysis">
        <DataVisualization
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          showAnalysis={showAnalysis}
        />
      </div>

      <BottomNav activeSection={activeSection} onNavigate={scrollToSection} />
    </main>
  );
}
