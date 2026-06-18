import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function AboutPage() {
  return (
    <main className="pt-[80px] pb-24 px-6">
      <div className="max-w-page mx-auto">
        <div className="pt-8 mb-14">
          <h1
            className="font-display text-2xl md:text-3xl font-semibold mb-4"
            style={{ color: 'var(--text-1)' }}
          >
            About
          </h1>
          <p
            className="text-base leading-relaxed"
            style={{ color: 'var(--text-2)' }}
          >
            The Growth Room is a calm, intentional listening space for curious minds.
          </p>
        </div>

        <div
          className="space-y-10"
          style={{ borderTop: '1px solid var(--divider)', paddingTop: '2.5rem' }}
        >
          <section>
            <h2
              className="text-sm font-semibold mb-3"
              style={{ color: 'var(--text-1)' }}
            >
              The idea
            </h2>
            <p className="text-sm leading-[1.8]" style={{ color: 'var(--text-2)' }}>
              We believe wisdom shouldn't require hours of uninterrupted time.
              The world's best ideas can be absorbed in short, intentional listening
              sessions that fit into everyday life.
            </p>
          </section>

          <section>
            <h2
              className="text-sm font-semibold mb-3"
              style={{ color: 'var(--text-1)' }}
            >
              How it works
            </h2>
            <p className="text-sm leading-[1.8]" style={{ color: 'var(--text-2)' }}>
              Each session is a carefully crafted 5-minute experience — not a summary,
              but a thoughtful narration that captures the essence of a powerful idea.
              Simple. Honest. Worth carrying with you.
            </p>
          </section>

          <section>
            <h2
              className="text-sm font-semibold mb-3"
              style={{ color: 'var(--text-1)' }}
            >
              Our promise
            </h2>
            <p className="text-sm leading-[1.8]" style={{ color: 'var(--text-2)' }}>
              No ads. No notifications. No infinite scroll.
              Just you and ideas that matter. A little wiser, every day.
            </p>
          </section>
        </div>

        <div
          className="mt-14 pt-10"
          style={{ borderTop: '1px solid var(--divider)' }}
        >
          <Link
            to="/listen"
            className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: 'var(--accent)' }}
          >
            Begin your first session
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
