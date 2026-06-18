import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, X } from 'lucide-react';
import { usePlayer } from '../context/PlayerContext';

const speeds = [0.8, 1, 1.2, 1.5, 2];

export function MiniPlayer() {
  const {
    book,
    session,
    isPlaying,
    currentTime,
    duration,
    playbackSpeed,
    togglePlay,
    seek,
    seekRelative,
    setPlaybackSpeed,
    nextSession,
    previousSession,
    close,
  } = usePlayer();

  const [showSpeedMenu, setShowSpeedMenu] = useState(false);

  if (!book || !session) return null;

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = (currentTime / duration) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark-100 border-t border-light-600/10 z-50 animate-slide-in">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center gap-3 md:gap-4">
          <img
            src={book.cover}
            alt={book.title}
            className="w-12 h-12 md:w-14 md:h-14 rounded-lg object-cover flex-shrink-0"
          />

          <div className="flex-1 min-w-0">
            <p className="text-light-200 text-sm font-medium truncate">{session.title}</p>
            <p className="text-light-500 text-xs truncate">{book.title}</p>
          </div>

          <div className="hidden md:flex items-center gap-6 flex-1">
            <div className="flex items-center gap-2 mx-auto">
              <button
                onClick={() => seekRelative(-10)}
                className="p-2 text-light-400 hover:text-light-200 transition-colors"
                aria-label="Rewind 10 seconds"
              >
                <SkipBack className="w-5 h-5" />
              </button>

              <button
                onClick={previousSession}
                className="p-2 text-light-400 hover:text-light-200 transition-colors"
                aria-label="Previous session"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                </svg>
              </button>

              <button
                onClick={togglePlay}
                className="p-3 rounded-full bg-accent text-dark hover:bg-accent-400 transition-colors"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 fill-current" />
                ) : (
                  <Play className="w-5 h-5 fill-current" />
                )}
              </button>

              <button
                onClick={nextSession}
                className="p-2 text-light-400 hover:text-light-200 transition-colors"
                aria-label="Next session"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.334-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
                </svg>
              </button>

              <button
                onClick={() => seekRelative(10)}
                className="p-2 text-light-400 hover:text-light-200 transition-colors"
                aria-label="Forward 10 seconds"
              >
                <SkipForward className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="relative">
            <button
              onClick={() => setShowSpeedMenu(!showSpeedMenu)}
              className="px-3 py-1.5 rounded-lg text-sm font-medium bg-dark-200 text-light-200 hover:bg-dark-100 transition-colors"
            >
              {playbackSpeed}x
            </button>
            {showSpeedMenu && (
              <div className="absolute bottom-full right-0 mb-2 bg-dark-100 rounded-lg border border-light-600/20 overflow-hidden shadow-lg">
                {speeds.map((speed) => (
                  <button
                    key={speed}
                    onClick={() => {
                      setPlaybackSpeed(speed);
                      setShowSpeedMenu(false);
                    }}
                    className={`block w-full px-4 py-2 text-sm text-right ${
                      playbackSpeed === speed
                        ? 'bg-accent text-dark'
                        : 'text-light-300 hover:bg-dark-200'
                    }`}
                  >
                    {speed}x
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={close}
            className="p-2 text-light-500 hover:text-light-200 transition-colors"
            aria-label="Close player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-2 flex items-center gap-3">
          <span className="text-xs text-light-600 w-10">{formatTime(currentTime)}</span>
          <div
            className="flex-1 h-1 bg-dark-300 rounded-full cursor-pointer group"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const percent = (e.clientX - rect.left) / rect.width;
              seek(percent * duration);
            }}
          >
            <div
              className="h-full bg-accent rounded-full relative group-hover:bg-accent-400 transition-colors"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <span className="text-xs text-light-600 w-10">{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}
