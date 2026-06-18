import { useParams, Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Play } from 'lucide-react';
import { getBookById, getRelatedBooks } from '../data/books';
import { usePlayer } from '../context/PlayerContext';

const categoryIcons: Record<string, string> = {
  'Personal Growth': '🌱',
  'Finance': '💰',
  'Psychology': '🧠',
  'Business': '📊',
  'Health': '💪',
  'Philosophy': '📜',
};

export function BookDetailPage() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const book = getBookById(id || '');
  const { playBook } = usePlayer();

  if (!book) {
    return (
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <h1 className="text-2xl font-semibold text-light-100 mb-4">Book not found</h1>
          <Link to="/collection" className="text-accent hover:text-accent-400">
            Browse Collection
          </Link>
        </div>
      </main>
    );
  }

  const relatedBooks = getRelatedBooks(book.id);

  const formatListeners = (num: number): string => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  return (
    <main className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <Link
          to={location.state?.from === 'home' ? '/' : '/collection'}
          className="inline-flex items-center gap-2 text-light-500 hover:text-light-200 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 mb-16">
          <div className="relative aspect-[2/3] lg:aspect-[3/4] lg:w-[320px] rounded-2xl overflow-hidden bg-dark-200 flex-shrink-0">
            <img
              src={book.cover}
              alt={`${book.title} by ${book.author}`}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="inline-flex items-center gap-1.5 text-sm text-light-500 mb-3">
              <span>{categoryIcons[book.category] || '📚'}</span>
              {book.category}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-light-100 mb-3 leading-tight">
              {book.title}
            </h1>

            <p className="text-light-500 text-lg mb-4">
              by {book.author}
            </p>

            <div className="flex items-center gap-4 text-sm text-light-500 mb-6">
              <span className="flex items-center gap-1 text-accent">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {book.rating}
              </span>
              <span className="text-light-600">·</span>
              <span>{formatListeners(book.listeners)} listeners</span>
              <span className="text-light-600">·</span>
              <span>{book.sessions.length} Sessions • {book.totalDuration}</span>
            </div>

            <p className="text-light-300 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
              {book.description}
            </p>

            <button
              onClick={() => playBook(book, book.sessions[0])}
              className="inline-flex items-center justify-center gap-2 bg-accent text-dark font-medium px-8 py-4 rounded-full text-base hover:bg-accent-400 transition-all duration-300 w-fit"
            >
              <Play className="w-5 h-5 fill-current" />
              Begin Your Session
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-12">
            <Section title="About">
              <p className="text-light-300 leading-relaxed">{book.about}</p>
            </Section>

            <Section title="Who Should Listen">
              <ul className="space-y-3">
                {book.whoShouldListen.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-light-300">
                    <span className="text-accent mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Why Listen">
              <ul className="space-y-3">
                {book.whyListen.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-light-300">
                    <span className="text-accent mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Key Takeaways">
              <ul className="space-y-3">
                {book.keyTakeaways.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-light-300">
                    <span className="text-accent mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Sessions">
              <div className="space-y-2">
                {book.sessions.map((session, index) => (
                  <button
                    key={session.id}
                    onClick={() => playBook(book, session)}
                    className="w-full flex items-center gap-4 p-4 rounded-xl bg-dark-200 hover:bg-dark-100 transition-colors text-left"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-dark-100 flex items-center justify-center text-xs text-light-500">
                      {index + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-light-200 font-medium truncate">{session.title}</p>
                      <p className="text-light-500 text-sm truncate">{session.description}</p>
                    </div>
                    <span className="flex-shrink-0 text-light-500 text-sm">{session.duration}</span>
                    <Play className="w-4 h-4 text-light-500 flex-shrink-0" />
                  </button>
                ))}
              </div>
            </Section>

            {book.communityNotes.length > 0 && (
              <Section title="Community Notes">
                <div className="space-y-4">
                  {book.communityNotes.map((note, i) => (
                    <div key={i} className="p-4 rounded-xl bg-dark-200">
                      <p className="text-light-300 text-sm leading-relaxed">{note}</p>
                    </div>
                  ))}
                </div>
              </Section>
            )}
          </div>

          <div className="lg:col-span-1">
            {relatedBooks.length > 0 && (
              <Section title="Related Books">
                <div className="space-y-4">
                  {relatedBooks.slice(0, 3).map((relatedBook) => (
                    <Link
                      key={relatedBook.id}
                      to={`/book/${relatedBook.id}`}
                      className="flex gap-4 p-3 rounded-xl hover:bg-dark-200 transition-colors"
                    >
                      <img
                        src={relatedBook.cover}
                        alt={relatedBook.title}
                        className="w-16 h-24 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex flex-col justify-center min-w-0">
                        <p className="text-light-200 font-medium text-sm truncate">{relatedBook.title}</p>
                        <p className="text-light-500 text-xs mt-1">{relatedBook.author}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </Section>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-light-100 mb-4">{title}</h2>
      {children}
    </section>
  );
}
