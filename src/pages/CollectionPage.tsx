import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { StopExistingCover } from '../components/StopExistingCover';

export function CollectionPage() {
  return (
    <main className="pt-[80px] pb-24 px-6">
      <div className="max-w-page mx-auto">
        <div className="mb-12 pt-8">
          <h1
            className="font-display text-2xl md:text-3xl font-semibold mb-2"
            style={{ color: 'var(--text-1)' }}
          >
            Collection
          </h1>
          <p className="text-sm" style={{ color: 'var(--text-2)' }}>
            Thoughtful sessions added regularly.
          </p>
        </div>

        {/* Available */}
        <div className="mb-12">
          <p
            className="text-xs font-semibold tracking-[0.12em] uppercase mb-6"
            style={{ color: 'var(--text-3)' }}
          >
            Available Now
          </p>

          <SessionRow
            cover={<StopExistingCover className="w-full h-full" />}
            badge="NEW"
            title="Stop Existing. Start Living."
            meta="Original Listening Session · 5 min"
            href="/listen"
            cta="Begin Listening"
          />
        </div>

        <div style={{ borderTop: '1px solid var(--divider)' }} />

        {/* Coming soon */}
        <div className="mt-12">
          <p
            className="text-xs font-semibold tracking-[0.12em] uppercase mb-6"
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
                className="w-full h-full object-cover opacity-40"
              />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium" style={{ color: 'var(--text-1)' }}>
                Atomic Habits
              </p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--text-2)' }}>
                James Clear
              </p>
              <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--text-3)' }}>
                One of the world's most influential books on building better habits and lasting change.
              </p>
            </div>

            <span
              className="text-[10px] font-semibold tracking-wide px-2.5 py-1 rounded-full flex-shrink-0"
              style={{ border: '1px solid var(--divider)', color: 'var(--text-3)' }}
            >
              COMING SOON
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

function SessionRow({
  cover,
  badge,
  title,
  meta,
  href,
  cta,
}: {
  cover: React.ReactNode;
  badge?: string;
  title: string;
  meta: string;
  href: string;
  cta: string;
}) {
  return (
    <div
      className="flex items-center gap-4 py-4"
      style={{ borderTop: '1px solid var(--divider)', borderBottom: '1px solid var(--divider)' }}
    >
      <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
        {cover}
        {badge && (
          <span
            className="absolute inset-0 flex items-center justify-center text-[8px] font-bold"
            style={{ background: 'rgba(0,0,0,0.5)', color: '#fff' }}
          />
        )}
      </div>

      <div className="flex-1 min-w-0">
        {badge && (
          <span
            className="text-[9px] font-bold tracking-wide px-1.5 py-0.5 rounded mr-2"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            {badge}
          </span>
        )}
        <p className="text-sm font-medium inline" style={{ color: 'var(--text-1)' }}>
          {title}
        </p>
        <p className="text-xs mt-0.5" style={{ color: 'var(--text-2)' }}>
          {meta}
        </p>
      </div>

      <Link
        to={href}
        className="inline-flex items-center gap-1.5 text-xs font-medium flex-shrink-0 transition-opacity hover:opacity-70"
        style={{ color: 'var(--accent)' }}
      >
        {cta}
        <ArrowRight className="w-3 h-3" />
      </Link>
    </div>
  );
}
