import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Book, Session } from '../data/books';

interface PlayerState {
  book: Book | null;
  session: Session | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  playbackSpeed: number;
}

interface PlayerContextType extends PlayerState {
  playBook: (book: Book, session: Session) => void;
  togglePlay: () => void;
  seek: (time: number) => void;
  seekRelative: (seconds: number) => void;
  setPlaybackSpeed: (speed: number) => void;
  nextSession: () => void;
  previousSession: () => void;
  close: () => void;
}

const PlayerContext = createContext<PlayerContextType | null>(null);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PlayerState>({
    book: null,
    session: null,
    isPlaying: false,
    currentTime: 0,
    duration: 180,
    playbackSpeed: 1,
  });

  const playBook = useCallback((book: Book, session: Session) => {
    setState((prev) => ({
      ...prev,
      book,
      session,
      isPlaying: true,
      currentTime: 0,
      duration: parseFloat(session.duration) * 60 || 180,
    }));
  }, []);

  const togglePlay = useCallback(() => {
    setState((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
  }, []);

  const seek = useCallback((time: number) => {
    setState((prev) => ({ ...prev, currentTime: Math.max(0, Math.min(time, prev.duration)) }));
  }, []);

  const seekRelative = useCallback((seconds: number) => {
    setState((prev) => ({
      ...prev,
      currentTime: Math.max(0, Math.min(prev.currentTime + seconds, prev.duration)),
    }));
  }, []);

  const setPlaybackSpeed = useCallback((speed: number) => {
    setState((prev) => ({ ...prev, playbackSpeed: speed }));
  }, []);

  const nextSession = useCallback(() => {
    setState((prev) => {
      if (!prev.book) return prev;
      const currentIndex = prev.book.sessions.findIndex((s) => s.id === prev.session?.id);
      const nextIndex = currentIndex + 1;
      if (nextIndex < prev.book.sessions.length) {
        const next = prev.book.sessions[nextIndex];
        return {
          ...prev,
          session: next,
          currentTime: 0,
          duration: parseFloat(next.duration) * 60 || 180,
        };
      }
      return prev;
    });
  }, []);

  const previousSession = useCallback(() => {
    setState((prev) => {
      if (!prev.book) return prev;
      const currentIndex = prev.book.sessions.findIndex((s) => s.id === prev.session?.id);
      const prevIndex = currentIndex - 1;
      if (prevIndex >= 0) {
        const prevSession = prev.book.sessions[prevIndex];
        return {
          ...prev,
          session: prevSession,
          currentTime: 0,
          duration: parseFloat(prevSession.duration) * 60 || 180,
        };
      }
      return prev;
    });
  }, []);

  const close = useCallback(() => {
    setState({
      book: null,
      session: null,
      isPlaying: false,
      currentTime: 0,
      duration: 180,
      playbackSpeed: 1,
    });
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        ...state,
        playBook,
        togglePlay,
        seek,
        seekRelative,
        setPlaybackSpeed,
        nextSession,
        previousSession,
        close,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
}
