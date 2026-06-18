import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar, Footer } from './components';
import { HomePage, CollectionPage, BookDetailPage, AboutPage, ListeningPage } from './pages';
import { PlayerProvider } from './context/PlayerContext';
import { ThemeProvider } from './context/ThemeContext';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--surface)', color: 'var(--text-1)' }}>
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/book/:id" element={<BookDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/listen" element={<ListeningPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <PlayerProvider>
          <ScrollToTop />
          <AppContent />
        </PlayerProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
