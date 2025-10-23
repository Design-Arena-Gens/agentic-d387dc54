export default function GlobalChallenges() {
  const challenges = [
    {
      title: 'Climate Change',
      description: 'Rising global temperatures and extreme weather events affecting ecosystems and communities worldwide.',
      icon: '🌍',
      stats: '+1.1°C since pre-industrial era'
    },
    {
      title: 'Economic Inequality',
      description: 'Growing wealth gap between nations and within societies, impacting access to resources and opportunities.',
      icon: '💰',
      stats: 'Top 1% own 43% of global wealth'
    },
    {
      title: 'Healthcare Access',
      description: 'Disparities in medical care, pandemic preparedness, and health infrastructure across regions.',
      icon: '🏥',
      stats: '400M lack basic healthcare'
    },
    {
      title: 'Digital Divide',
      description: 'Unequal access to technology and internet connectivity limiting education and economic participation.',
      icon: '💻',
      stats: '2.9B people still offline'
    },
    {
      title: 'Food Security',
      description: 'Climate impacts, supply chain disruptions, and population growth threatening sustainable food systems.',
      icon: '🌾',
      stats: '828M people face hunger'
    },
    {
      title: 'Biodiversity Loss',
      description: 'Rapid extinction rates and habitat destruction endangering ecosystems and natural resources.',
      icon: '🦋',
      stats: '1M species at risk'
    }
  ];

  return (
    <section className="py-16 px-4 md:py-24 bg-white" aria-labelledby="challenges-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="challenges-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 text-center">
          Current Global Challenges
        </h2>
        <p className="text-lg text-neutral-600 mb-12 text-center max-w-3xl mx-auto">
          Understanding the interconnected challenges facing our world today is the first step toward meaningful solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {challenges.map((challenge, index) => (
            <article
              key={index}
              className="bg-neutral-50 rounded-lg p-6 border border-neutral-200
                         hover:border-primary-400 hover:shadow-lg transition-all duration-300
                         focus-within:ring-2 focus-within:ring-primary-500"
            >
              <div className="text-4xl mb-4" role="img" aria-label={challenge.title}>
                {challenge.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                {challenge.title}
              </h3>
              <p className="text-neutral-700 mb-4 leading-relaxed">
                {challenge.description}
              </p>
              <div className="text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-2 rounded inline-block">
                {challenge.stats}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
