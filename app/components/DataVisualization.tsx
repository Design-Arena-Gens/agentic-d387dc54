'use client';

import { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DataVisualizationProps {
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
  showAnalysis: boolean;
}

interface DataPoint {
  year: string;
  temperature: number;
  renewable: number;
  emissions: number;
  gdp: number;
}

interface MetricData {
  category: string;
  value: number;
  change: number;
}

export default function DataVisualization({
  selectedRegion,
  setSelectedRegion,
  showAnalysis
}: DataVisualizationProps) {
  const [activeChart, setActiveChart] = useState<'climate' | 'economy'>('climate');

  const regions = [
    { value: 'world', label: 'World' },
    { value: 'north-america', label: 'North America' },
    { value: 'europe', label: 'Europe' },
    { value: 'asia', label: 'Asia' },
    { value: 'africa', label: 'Africa' },
    { value: 'south-america', label: 'South America' },
    { value: 'oceania', label: 'Oceania' }
  ];

  const getClimateData = (): DataPoint[] => {
    const baseData = [
      { year: '2015', temperature: 0.87, renewable: 22, emissions: 35.5, gdp: 75.5 },
      { year: '2016', temperature: 0.94, renewable: 24, emissions: 35.8, gdp: 76.2 },
      { year: '2017', temperature: 0.91, renewable: 26, emissions: 36.2, gdp: 77.8 },
      { year: '2018', temperature: 0.98, renewable: 28, emissions: 37.1, gdp: 79.5 },
      { year: '2019', temperature: 1.02, renewable: 29, emissions: 36.7, gdp: 81.2 },
      { year: '2020', temperature: 1.09, renewable: 31, emissions: 34.8, gdp: 77.8 },
      { year: '2021', temperature: 1.11, renewable: 33, emissions: 36.3, gdp: 82.4 },
      { year: '2022', temperature: 1.14, renewable: 35, emissions: 37.2, gdp: 84.7 },
      { year: '2023', temperature: 1.18, renewable: 38, emissions: 37.8, gdp: 87.1 },
      { year: '2024', temperature: 1.21, renewable: 41, emissions: 38.1, gdp: 89.5 }
    ];

    if (selectedRegion === 'world') return baseData;

    const factor = selectedRegion === 'europe' ? 1.2 : selectedRegion === 'asia' ? 0.9 : 1.0;
    return baseData.map(d => ({
      ...d,
      renewable: Math.round(d.renewable * factor),
      emissions: Math.round(d.emissions * (2 - factor) * 10) / 10
    }));
  };

  const getMetricsData = (): MetricData[] => {
    return [
      { category: 'Clean Energy', value: 41, change: 12 },
      { category: 'Forest Coverage', value: 31, change: -5 },
      { category: 'Healthcare Access', value: 68, change: 8 },
      { category: 'Digital Access', value: 63, change: 15 },
      { category: 'Food Security', value: 72, change: 4 },
      { category: 'Education Rate', value: 85, change: 6 }
    ];
  };

  const climateData = getClimateData();
  const metricsData = getMetricsData();

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-neutral-200">
          <p className="font-semibold text-neutral-900 mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: <span className="font-semibold">{entry.value}{entry.name.includes('Temperature') ? '°C' : entry.name.includes('Renewable') ? '%' : ''}</span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section
      className="py-16 px-4 md:py-24 bg-gradient-to-br from-neutral-50 to-primary-50"
      aria-labelledby="analysis-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2 id="analysis-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 text-center">
          Interactive Data Analysis
        </h2>
        <p className="text-lg text-neutral-600 mb-8 text-center max-w-3xl mx-auto">
          Explore real-time data visualizations and insights across different regions and metrics.
        </p>

        {/* Region Selector */}
        <div className="mb-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <label htmlFor="region-select" className="text-lg font-semibold text-neutral-900">
            Select Region:
          </label>
          <select
            id="region-select"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="px-6 py-3 rounded-lg border-2 border-neutral-300 bg-white
                       text-neutral-900 font-medium text-base
                       focus:outline-none focus:ring-4 focus:ring-primary-300 focus:border-primary-500
                       hover:border-primary-400 transition-all cursor-pointer
                       min-w-[200px]"
            aria-label="Select region for analysis"
          >
            {regions.map((region) => (
              <option key={region.value} value={region.value}>
                {region.label}
              </option>
            ))}
          </select>

          <button
            onClick={() => setActiveChart(activeChart === 'climate' ? 'economy' : 'climate')}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold
                       hover:bg-primary-700 transition-all duration-300
                       focus:outline-none focus:ring-4 focus:ring-primary-300
                       active:transform active:scale-95"
            aria-label={`Switch to ${activeChart === 'climate' ? 'economy' : 'climate'} view`}
          >
            Switch to {activeChart === 'climate' ? 'Economy' : 'Climate'} View
          </button>
        </div>

        {showAnalysis && (
          <div className="space-y-8 animate-fadeIn">
            {/* Main Chart */}
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-xl border border-neutral-200">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                {activeChart === 'climate' ? 'Climate & Energy Trends' : 'Economic Growth Indicators'}
              </h3>

              <ResponsiveContainer width="100%" height={400}>
                {activeChart === 'climate' ? (
                  <LineChart data={climateData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                    <XAxis
                      dataKey="year"
                      stroke="#525252"
                      style={{ fontSize: '14px' }}
                    />
                    <YAxis stroke="#525252" style={{ fontSize: '14px' }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                      wrapperStyle={{ fontSize: '14px', paddingTop: '20px' }}
                    />
                    <Line
                      type="monotone"
                      dataKey="temperature"
                      stroke="#ef4444"
                      strokeWidth={3}
                      name="Temperature Increase (°C)"
                      dot={{ fill: '#ef4444', r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="renewable"
                      stroke="#10b981"
                      strokeWidth={3}
                      name="Renewable Energy (%)"
                      dot={{ fill: '#10b981', r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                ) : (
                  <LineChart data={climateData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                    <XAxis
                      dataKey="year"
                      stroke="#525252"
                      style={{ fontSize: '14px' }}
                    />
                    <YAxis stroke="#525252" style={{ fontSize: '14px' }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                      wrapperStyle={{ fontSize: '14px', paddingTop: '20px' }}
                    />
                    <Line
                      type="monotone"
                      dataKey="gdp"
                      stroke="#0ea5e9"
                      strokeWidth={3}
                      name="Global GDP (Trillion USD)"
                      dot={{ fill: '#0ea5e9', r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="emissions"
                      stroke="#f97316"
                      strokeWidth={3}
                      name="CO2 Emissions (Gt)"
                      dot={{ fill: '#f97316', r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                )}
              </ResponsiveContainer>
            </div>

            {/* Metrics Bar Chart */}
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-xl border border-neutral-200">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Key Progress Metrics
              </h3>

              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={metricsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                  <XAxis
                    dataKey="category"
                    stroke="#525252"
                    style={{ fontSize: '12px' }}
                    angle={-45}
                    textAnchor="end"
                    height={100}
                  />
                  <YAxis stroke="#525252" style={{ fontSize: '14px' }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: '14px', paddingTop: '20px' }} />
                  <Bar
                    dataKey="value"
                    fill="#0ea5e9"
                    name="Progress (%)"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>

              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                {metricsData.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-neutral-50 p-4 rounded-lg border border-neutral-200"
                  >
                    <p className="text-sm text-neutral-600 mb-1">{metric.category}</p>
                    <p className="text-2xl font-bold text-neutral-900">{metric.value}%</p>
                    <p className={`text-sm font-semibold ${metric.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {metric.change >= 0 ? '↑' : '↓'} {Math.abs(metric.change)}% YoY
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Analysis Summary */}
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-xl border border-neutral-200">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Analysis Summary
              </h3>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  <strong className="text-neutral-900">Key Finding:</strong> Global renewable energy adoption
                  has increased by 87% since 2015, reaching 41% of total energy production in 2024.
                </p>
                <p>
                  <strong className="text-neutral-900">Trend Alert:</strong> Despite positive progress in
                  clean energy, global temperatures continue to rise at 0.03°C annually, emphasizing the
                  urgent need for accelerated action.
                </p>
                <p>
                  <strong className="text-neutral-900">Regional Insight:</strong> {
                    selectedRegion === 'world' ? 'Global data shows varied progress across different metrics.' :
                    selectedRegion === 'europe' ? 'Europe leads in renewable energy adoption and climate action.' :
                    selectedRegion === 'asia' ? 'Asia shows rapid digital infrastructure development.' :
                    'This region demonstrates unique challenges and opportunities in sustainable development.'
                  }
                </p>
              </div>
            </div>
          </div>
        )}

        {!showAnalysis && (
          <div className="bg-white rounded-lg p-12 shadow-xl border border-neutral-200 text-center">
            <p className="text-xl text-neutral-600 mb-4">
              Click "Analyze Global Trends" to view interactive data visualizations
            </p>
            <p className="text-neutral-500">
              Select a region and explore climate, economic, and social progress metrics
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
