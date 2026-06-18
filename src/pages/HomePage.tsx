import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Hero } from '../components/Hero';
import { StopExistingCover } from '../components/StopExistingCover';

function Divider() {
  return (
    <div
      className="max-w-page mx-auto px-6"
      style={{ borderTop: '1px solid var(--divider)' }}
    />
  );
}

function FeaturedSession() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-page mx-auto">
        <p
          className="text-xs font-semibold tracking-[0.12em] uppercase mb-10"
          style={{ color: 'var(--text-3)' }}
        >
          Featured Session
        </p>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 items-start">
          <div className="relative flex-shrink-0">
            <div
              className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}
            >
              <StopExistingCover className="w-full h-full" />
            </div>
            <span
              className="absolute -top-2 -right-2 text-[10px] font-bold tracking-wide px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: 'var(--accent)',
                color: '#fff',
              }}
            >
              NEW
            </span>
          </div>

          <div className="flex flex-col gap-3 flex-1">
            <p className="text-xs" style={{ color: 'var(--text-3)' }}>
              Original Listening Session · 5 min
            </p>

            <h2
              className="font-display text-xl sm:text-2xl font-semibold leading-snug"
              style={{ color: 'var(--text-1)' }}
            >
              Stop Existing. Start Living.
            </h2>

            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
              A quiet invitation to pause and reflect.
            </p>

            <Link
              to="/listen"
              className="inline-flex items-center gap-2 mt-1 text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: 'var(--accent)' }}
            >
              Begin Listening
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComingSoonSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-page mx-auto">
        <p
          className="text-xs font-semibold tracking-[0.12em] uppercase mb-8"
          style={{ color: 'var(--text-3)' }}
        >
          Coming Soon
        </p>

        <div
          className="flex items-center gap-4 py-4"
          style={{ borderTop: '1px solid var(--divider)', borderBottom: '1px solid var(--divider)' }}
        >
          <div
            className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0"
            style={{ background: 'var(--surface-3)' }}
          >
            <img
              src="https://images.unsplash.com/photo-1544716278-ca5e5906b245?w=96&h=96&fit=crop"
              alt="Atomic Habits"
              className="w-full h-full object-cover opacity-50"
            />
          </div>

          <div className="flex-1 min-w-0">
            <p
              className="text-sm font-medium truncate"
              style={{ color: 'var(--text-1)' }}
            >
              Atomic Habits
            </p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--text-2)' }}>
              James Clear
            </p>
          </div>

          <span
            className="text-[10px] font-semibold tracking-wide px-2.5 py-1 rounded-full flex-shrink-0"
            style={{
              border: '1px solid var(--divider)',
              color: 'var(--text-3)',
            }}
          >
            COMING SOON
          </span>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <main>
      <Hero />
      <Divider />
      <FeaturedSession />
      <Divider />
      <ComingSoonSection />
    </main>
  );
}
