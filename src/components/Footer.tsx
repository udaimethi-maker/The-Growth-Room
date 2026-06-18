import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer
      className="px-6 py-16"
      style={{ borderTop: '1px solid var(--divider)' }}
    >
      <div className="max-w-page mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--text-2)', maxWidth: '300px' }}>
            Thoughtful listening sessions inspired by books, psychology, science and philosophy.
          </p>
          <Link
            to="/"
            className="font-display font-semibold text-sm"
            style={{ color: 'var(--text-1)' }}
          >
            The Growth Room
          </Link>
          <p className="text-xs mt-0.5" style={{ color: 'var(--text-3)' }}>
            Become a little wiser, every day.
          </p>
        </div>

        <div className="flex gap-6">
          <Link
            to="/collection"
            className="text-xs transition-opacity hover:opacity-60"
            style={{ color: 'var(--text-2)' }}
          >
            Collection
          </Link>
          <Link
            to="/about"
            className="text-xs transition-opacity hover:opacity-60"
            style={{ color: 'var(--text-2)' }}
          >
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
