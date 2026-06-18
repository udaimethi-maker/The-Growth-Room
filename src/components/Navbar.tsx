import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        borderBottom: scrolled ? '1px solid var(--divider)' : '1px solid transparent',
        backgroundColor: scrolled ? 'var(--surface)' : 'transparent',
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
      }}
      className="fixed top-0 left-0 right-0 z-40"
    >
      <nav className="max-w-page mx-auto px-6 h-[60px] flex items-center justify-between">
        <Link
          to="/"
          className="font-display font-semibold text-base tracking-tight"
          style={{ color: 'var(--text-1)' }}
        >
          The Growth Room
        </Link>

        <div className="flex items-center gap-7">
          <NavLink to="/collection" active={location.pathname === '/collection'}>
            Collection
          </NavLink>
          <NavLink to="/about" active={location.pathname === '/about'}>
            About
          </NavLink>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-8 h-8 flex items-center justify-center transition-opacity hover:opacity-70"
            style={{ color: 'var(--text-2)' }}
          >
            {theme === 'dark' ? (
              <Sun className="w-[18px] h-[18px]" />
            ) : (
              <Moon className="w-[18px] h-[18px]" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

function NavLink({
  to,
  active,
  children,
}: {
  to: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="text-sm transition-colors"
      style={{ color: active ? 'var(--text-1)' : 'var(--text-2)' }}
    >
      {children}
    </Link>
  );
}
