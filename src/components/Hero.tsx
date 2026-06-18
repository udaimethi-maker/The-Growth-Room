import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-[120px] pb-20 px-6">
      <div className="max-w-page mx-auto text-center">
        <h1
          className="font-display text-[2.6rem] md:text-[3.2rem] font-semibold tracking-tight leading-[1.1] mb-5 animate-fade-in"
          style={{ color: 'var(--text-1)' }}
        >
          The Growth Room
        </h1>

        <p
          className="text-xl md:text-2xl font-light mb-6 animate-fade-in animation-delay-100"
          style={{ color: 'var(--text-1)' }}
        >
          Become a little wiser, every day.
        </p>

        <p
          className="text-base md:text-lg leading-relaxed mb-10 animate-fade-in animation-delay-200"
          style={{ color: 'var(--text-2)', maxWidth: '480px', margin: '0 auto 2.5rem' }}
        >
          Thoughtful listening sessions inspired by books, psychology, science and philosophy.
        </p>

        <div className="animate-fade-in animation-delay-300">
          <Link
            to="/listen"
            className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full transition-all duration-200 hover:opacity-80"
            style={{
              backgroundColor: 'var(--text-1)',
              color: 'var(--surface)',
            }}
          >
            Begin Listening
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
