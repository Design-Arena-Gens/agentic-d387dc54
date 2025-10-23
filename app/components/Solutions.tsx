export default function Solutions() {
  const solutions = [
    {
      title: 'Renewable Energy Transition',
      description: 'Accelerating adoption of solar, wind, and clean energy technologies to reduce carbon emissions and combat climate change.',
      impact: 'High',
      timeline: '2025-2035'
    },
    {
      title: 'Universal Healthcare Systems',
      description: 'Implementing comprehensive healthcare coverage and strengthening public health infrastructure globally.',
      impact: 'High',
      timeline: '2025-2040'
    },
    {
      title: 'Digital Infrastructure Development',
      description: 'Expanding internet access and digital literacy programs to bridge the technology gap in underserved regions.',
      impact: 'Medium',
      timeline: '2025-2030'
    },
    {
      title: 'Sustainable Agriculture',
      description: 'Promoting regenerative farming practices, vertical farming, and reducing food waste across supply chains.',
      impact: 'High',
      timeline: '2025-2035'
    },
    {
      title: 'Education Reform',
      description: 'Modernizing educational systems with focus on critical thinking, technology skills, and lifelong learning.',
      impact: 'Medium',
      timeline: '2025-2040'
    },
    {
      title: 'Circular Economy Models',
      description: 'Transitioning from linear to circular economic systems that prioritize reuse, recycling, and sustainability.',
      impact: 'Medium',
      timeline: '2025-2050'
    }
  ];

  const getImpactColor = (impact: string) => {
    return impact === 'High'
      ? 'bg-green-100 text-green-800 border-green-300'
      : 'bg-blue-100 text-blue-800 border-blue-300';
  };

  return (
    <section className="py-16 px-4 md:py-24 bg-neutral-50" aria-labelledby="solutions-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="solutions-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 text-center">
          Potential Solutions & Actions
        </h2>
        <p className="text-lg text-neutral-600 mb-12 text-center max-w-3xl mx-auto">
          Collaborative approaches and innovative strategies that can address our most pressing global challenges.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <article
              key={index}
              className="bg-white rounded-lg p-6 border border-neutral-200
                         hover:border-primary-400 hover:shadow-xl transition-all duration-300
                         focus-within:ring-2 focus-within:ring-primary-500"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-neutral-900 flex-1">
                  {solution.title}
                </h3>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full border ${getImpactColor(solution.impact)}`}
                  aria-label={`Impact level: ${solution.impact}`}
                >
                  {solution.impact} Impact
                </span>
              </div>
              <p className="text-neutral-700 mb-4 leading-relaxed">
                {solution.description}
              </p>
              <div className="flex items-center text-sm text-neutral-600">
                <span className="mr-2" role="img" aria-label="Timeline">📅</span>
                <span>Target: {solution.timeline}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
