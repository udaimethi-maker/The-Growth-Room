import { Link } from 'react-router-dom';
import type { Book } from '../data/books';

interface BookCardProps {
  book: Book;
  variant?: 'default' | 'featured' | 'compact';
}

const categoryIcons: Record<string, string> = {
  'Personal Growth': '🌱',
  'Finance': '💰',
  'Psychology': '🧠',
  'Business': '📊',
  'Health': '💪',
  'Philosophy': '📜',
};

export function BookCard({ book, variant = 'default' }: BookCardProps) {
  const cardContent = (
    <article className="group relative flex flex-col w-[180px] md:w-[200px] flex-shrink-0">
      <div className="relative aspect-[2/3] rounded-2xl overflow-hidden mb-4 bg-dark-200">
        <img
          src={book.cover}
          alt={`${book.title} by ${book.author}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            className="w-full bg-white text-dark font-medium px-4 py-2.5 rounded-full text-sm hover:bg-light-100 transition-colors"
            onClick={(e) => e.preventDefault()}
          >
            Begin
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="text-xs text-light-500 flex items-center gap-1.5">
          <span>{categoryIcons[book.category] || '📚'}</span>
          {book.category}
        </span>

        <h3 className="font-semibold text-light-100 text-sm md:text-base leading-snug line-clamp-2 group-hover:text-white transition-colors">
          {book.title}
        </h3>

        <p className="text-light-500 text-xs md:text-sm">
          {book.author}
        </p>

        <div className="flex items-center gap-1 text-xs mt-1">
          <span className="text-accent flex items-center gap-0.5">
            <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {book.rating}
          </span>
          <span className="text-light-600 mx-1">·</span>
          <span className="text-light-500">
            {book.sessions.length} Sessions • {book.totalDuration}
          </span>
        </div>
      </div>
    </article>
  );

  if (variant === 'featured') {
    return (
      <Link to={`/book/${book.id}`} className="group relative flex flex-col md:flex-row gap-6 md:gap-8 w-full">
        <div className="relative aspect-[2/3] md:aspect-[3/4] md:w-[280px] rounded-2xl overflow-hidden bg-dark-200 flex-shrink-0">
          <img
            src={book.cover}
            alt={`${book.title} by ${book.author}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
        </div>

        <div className="flex flex-col justify-center gap-4">
          <span className="inline-flex items-center gap-1.5 text-xs text-accent">
            <span>🕐</span>
            Today's Pick
          </span>

          <h3 className="font-semibold text-light-100 text-2xl md:text-3xl leading-tight">
            {book.title}
          </h3>

          <p className="text-light-500 text-sm md:text-base">
            by {book.author}
          </p>

          <p className="text-light-300 text-sm md:text-base max-w-md">
            {book.description}
          </p>

          <div className="flex items-center gap-3 text-sm text-light-500">
            <span className="flex items-center gap-1 text-accent">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {book.rating}
            </span>
            <span className="text-light-600">·</span>
            <span>{book.totalDuration} • {book.sessions.length} Sessions</span>
          </div>

          <Link
            to={`/book/${book.id}`}
            className="inline-flex items-center gap-2 text-accent text-sm font-medium mt-2 group-hover:gap-3 transition-all"
          >
            Begin
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/book/${book.id}`}>
      {cardContent}
    </Link>
  );
}
