import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { searchBooks, type Book } from '../data/books';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Book[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim()) {
      const searchResults = searchBooks(query);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      <div className="fixed inset-0 bg-dark/90 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-dark-100 rounded-2xl w-full max-w-2xl border border-light-600/20 shadow-2xl animate-slide-up">
        <div className="flex items-center gap-3 p-4 border-b border-light-600/10">
          <Search className="w-5 h-5 text-light-500" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search books, authors, categories..."
            className="flex-1 bg-transparent text-light-100 placeholder-light-600 focus:outline-none text-base"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-dark-200 text-light-500 hover:text-light-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {query.trim() === '' && (
            <div className="p-8 text-center">
              <p className="text-light-500">Start typing to search...</p>
            </div>
          )}

          {query.trim() && results.length === 0 && (
            <div className="p-8 text-center">
              <p className="text-light-500">No books found for "{query}"</p>
            </div>
          )}

          {results.length > 0 && (
            <div className="p-2">
              {results.map((book) => (
                <Link
                  key={book.id}
                  to={`/book/${book.id}`}
                  onClick={onClose}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-dark-200 transition-colors"
                >
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-14 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-light-200 font-medium truncate">{book.title}</p>
                    <p className="text-light-500 text-sm mt-0.5">{book.author}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-accent text-xs">{book.category}</span>
                      <span className="text-light-600">·</span>
                      <span className="text-light-500 text-xs">
                        {book.rating} ★ • {book.sessions.length} sessions
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 border-t border-light-600/10">
          <p className="text-light-600 text-xs text-center">
            Press <kbd className="px-1.5 py-0.5 rounded bg-dark-200 text-light-400 mx-1">ESC</kbd> to close
          </p>
        </div>
      </div>
    </div>
  );
}
