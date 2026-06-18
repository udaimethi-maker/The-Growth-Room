import { useRef, useState } from 'react';
import type { Book } from '../data/books';
import { BookCard } from './BookCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BookSectionProps {
  title: string;
  subtitle?: string;
  books: Book[];
  variant?: 'scroll' | 'grid' | 'featured';
}

export function BookSection({ title, subtitle, books, variant = 'scroll' }: BookSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 420;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (variant === 'featured') {
    return (
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-light-100">{title}</h2>
            {subtitle && (
              <p className="text-light-500 text-sm md:text-base mt-2">{subtitle}</p>
            )}
          </div>
          {books[0] && <BookCard book={books[0]} variant="featured" />}
        </div>
      </section>
    );
  }

  if (variant === 'grid') {
    return (
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-light-100">{title}</h2>
            {subtitle && (
              <p className="text-light-500 text-sm md:text-base mt-2">{subtitle}</p>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-light-100">{title}</h2>
            {subtitle && (
              <p className="text-light-500 text-sm md:text-base mt-2">{subtitle}</p>
            )}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full border transition-all duration-300 ${
                canScrollLeft
                  ? 'border-light-600/20 text-light-400 hover:border-light-600/40 hover:text-light-200'
                  : 'border-light-600/10 text-light-600 cursor-not-allowed'
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-2 rounded-full border transition-all duration-300 ${
                canScrollRight
                  ? 'border-light-600/20 text-light-400 hover:border-light-600/40 hover:text-light-200'
                  : 'border-light-600/10 text-light-600 cursor-not-allowed'
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-5 md:gap-6 overflow-x-auto scrollbar-hide px-6 md:px-8 pb-4"
        >
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-dark to-transparent pointer-events-none hidden md:block" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-dark to-transparent pointer-events-none hidden md:block" />
      </div>
    </section>
  );
}
