interface HeroSectionProps {
  onAnalyze: () => void;
}

export default function HeroSection({ onAnalyze }: HeroSectionProps) {
  return (
    <section
      className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 px-4 md:py-32"
      role="banner"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
          Understanding Today, <br className="hidden md:block" />
          Shaping Tomorrow
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-primary-50 leading-relaxed">
          Explore global trends, analyze critical challenges, and discover data-driven insights
          that help us navigate the complexities of our changing world.
        </p>
        <button
          onClick={onAnalyze}
          className="bg-white text-primary-700 px-8 py-4 rounded-lg text-lg font-semibold
                     hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl
                     transform hover:-translate-y-0.5 focus:outline-none focus:ring-4
                     focus:ring-primary-300 active:transform active:translate-y-0"
          aria-label="Analyze global trends and data"
        >
          Analyze Global Trends
        </button>
      </div>
    </section>
  );
}
