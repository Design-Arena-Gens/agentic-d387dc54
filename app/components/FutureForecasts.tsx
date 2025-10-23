export default function FutureForecasts() {
  const forecasts = [
    {
      year: '2030',
      title: 'Clean Energy Milestone',
      description: 'Renewable energy projected to account for 60% of global electricity generation.',
      probability: 'High',
      color: 'from-green-500 to-green-600'
    },
    {
      year: '2035',
      title: 'AI-Powered Healthcare',
      description: 'AI diagnostics and personalized medicine become standard in developed nations.',
      probability: 'High',
      color: 'from-blue-500 to-blue-600'
    },
    {
      year: '2040',
      title: 'Universal Internet Access',
      description: 'Satellite networks and infrastructure development bring connectivity to 95% of global population.',
      probability: 'Medium',
      color: 'from-purple-500 to-purple-600'
    },
    {
      year: '2045',
      title: 'Carbon Neutrality',
      description: 'Major economies achieve net-zero carbon emissions through technology and policy.',
      probability: 'Medium',
      color: 'from-teal-500 to-teal-600'
    },
    {
      year: '2050',
      title: 'Food Security Revolution',
      description: 'Lab-grown proteins and vertical farming eliminate hunger in most regions.',
      probability: 'Medium',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section className="py-16 px-4 md:py-24 bg-white" aria-labelledby="forecasts-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="forecasts-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 text-center">
          Future Forecasts & Possibilities
        </h2>
        <p className="text-lg text-neutral-600 mb-12 text-center max-w-3xl mx-auto">
          Data-driven projections and potential milestones that could shape our collective future.
        </p>

        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-neutral-200" />

          <div className="space-y-8 md:space-y-12">
            {forecasts.map((forecast, index) => (
              <article
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Year badge */}
                <div className={`w-full md:w-5/12 flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  <div
                    className={`bg-gradient-to-br ${forecast.color} text-white px-6 py-3 rounded-full
                               font-bold text-xl shadow-lg z-10`}
                    role="status"
                    aria-label={`Forecast year ${forecast.year}`}
                  >
                    {forecast.year}
                  </div>
                </div>

                {/* Content card */}
                <div className="w-full md:w-5/12">
                  <div
                    className="bg-neutral-50 rounded-lg p-6 border border-neutral-200
                               hover:border-primary-400 hover:shadow-xl transition-all duration-300
                               focus-within:ring-2 focus-within:ring-primary-500"
                  >
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      {forecast.title}
                    </h3>
                    <p className="text-neutral-700 mb-3 leading-relaxed">
                      {forecast.description}
                    </p>
                    <div className="flex items-center text-sm">
                      <span className="mr-2" role="img" aria-label="Probability">📊</span>
                      <span className="text-neutral-600">
                        Probability: <span className="font-semibold text-neutral-900">{forecast.probability}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
