const features = [
  {
    icon: '🎧',
    title: 'Short listening sessions',
    description: 'Perfect for busy schedules.',
  },
  {
    icon: '🧠',
    title: 'Ideas that stay with you',
    description: 'Understand the most important concepts faster.',
  },
  {
    icon: '🌱',
    title: 'Grow consistently',
    description: 'One session at a time.',
  },
];

export function WhySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-light-100 text-center mb-12">
          Why The Growth Room
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-dark-200 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center"
            >
              <span className="text-4xl mb-4">{feature.icon}</span>
              <h3 className="text-light-100 font-medium text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-light-500 text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
