import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Pause, RotateCcw, RotateCw } from 'lucide-react';
import { StopExistingCover } from '../components/StopExistingCover';

const AUDIO_URL =
  'https://res.cloudinary.com/dxvmdsswl/video/upload/v1781690725/stop_living_start_existing_jlpgwn.mp3';
const SPEEDS = [0.8, 1, 1.2, 1.5, 2];

function fmt(s: number) {
  if (!isFinite(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

// ── Audio Player ─────────────────────────────────────

function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [speedOpen, setSpeedOpen] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setTime(audio.currentTime);
    const onDurationChange = () => setDuration(audio.duration);
    const onEnded = () => setPlaying(false);
    const onLoadedMetadata = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('durationchange', onDurationChange);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('durationchange', onDurationChange);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  const seekBy = (delta: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(0, Math.min(audio.currentTime + delta, audio.duration));
  };

  const seekTo = (pct: number) => {
    const audio = audioRef.current;
    if (!audio || !isFinite(audio.duration)) return;
    audio.currentTime = pct * audio.duration;
  };

  const changeSpeed = (s: number) => {
    setSpeed(s);
    setSpeedOpen(false);
    if (audioRef.current) audioRef.current.playbackRate = s;
  };

  const pct = duration > 0 ? (time / duration) * 100 : 0;

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={AUDIO_URL}
        preload="metadata"
      />

      {/* Cover */}
      <div
        className="w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden flex-shrink-0"
        style={{ boxShadow: '0 12px 48px rgba(0,0,0,0.3)' }}
      >
        <StopExistingCover className="w-full h-full" />
      </div>

      {/* Title */}
      <div className="text-center">
        <h1
          className="font-display text-xl md:text-2xl font-semibold mb-1"
          style={{ color: 'var(--text-1)' }}
        >
          Stop Existing. Start Living.
        </h1>
        <p className="text-sm" style={{ color: 'var(--text-2)' }}>
          Original Listening Session · {duration > 0 ? fmt(duration) : '5 min'}
        </p>
      </div>

      {/* Progress bar */}
      <div className="w-full">
        <div
          className="relative h-1 rounded-full mb-2 cursor-pointer group"
          style={{ background: 'var(--surface-3)' }}
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            seekTo((e.clientX - rect.left) / rect.width);
          }}
        >
          <div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              width: `${pct}%`,
              background: 'var(--text-1)',
              transition: 'width 0.1s linear',
            }}
          />
          <div
            className="absolute top-1/2 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              left: `${pct}%`,
              transform: 'translateX(-50%) translateY(-50%)',
              background: 'var(--text-1)',
            }}
          />
        </div>
        <div className="flex justify-between text-xs" style={{ color: 'var(--text-3)' }}>
          <span>{fmt(time)}</span>
          <span>{duration > 0 ? fmt(duration) : '--:--'}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-8">
        <button
          onClick={() => seekBy(-10)}
          className="flex flex-col items-center gap-1 transition-opacity hover:opacity-60"
          style={{ color: 'var(--text-2)' }}
          aria-label="Rewind 10s"
        >
          <RotateCcw className="w-6 h-6" />
          <span className="text-[9px]">10</span>
        </button>

        <button
          onClick={togglePlay}
          className="w-14 h-14 rounded-full flex items-center justify-center transition-transform hover:scale-105"
          style={{ background: 'var(--text-1)', color: 'var(--surface)' }}
          aria-label={playing ? 'Pause' : 'Play'}
        >
          {playing ? (
            <Pause className="w-6 h-6 fill-current" />
          ) : (
            <Play className="w-6 h-6 fill-current ml-0.5" />
          )}
        </button>

        <button
          onClick={() => seekBy(10)}
          className="flex flex-col items-center gap-1 transition-opacity hover:opacity-60"
          style={{ color: 'var(--text-2)' }}
          aria-label="Forward 10s"
        >
          <RotateCw className="w-6 h-6" />
          <span className="text-[9px]">10</span>
        </button>
      </div>

      {/* Speed selector */}
      <div className="relative">
        <button
          onClick={() => setSpeedOpen(!speedOpen)}
          className="text-xs font-medium px-3 py-1.5 rounded-full transition-opacity hover:opacity-70"
          style={{ border: '1px solid var(--divider)', color: 'var(--text-2)' }}
        >
          {speed}x
        </button>

        {speedOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setSpeedOpen(false)} />
            <div
              className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 rounded-2xl overflow-hidden shadow-xl z-20 min-w-[80px]"
              style={{
                background: 'var(--surface-2)',
                border: '1px solid var(--divider)',
              }}
            >
              {SPEEDS.map((s) => (
                <button
                  key={s}
                  onClick={() => changeSpeed(s)}
                  className="block w-full px-5 py-2 text-xs text-center transition-colors"
                  style={{
                    color: speed === s ? 'var(--accent)' : 'var(--text-1)',
                    fontWeight: speed === s ? 600 : 400,
                    background: 'transparent',
                  }}
                >
                  {s}x
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ── Rating ────────────────────────────────────────────

function RatingSection() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [saved, setSaved] = useState(false);

  const pick = (v: number) => {
    setRating(v);
    setSaved(true);
  };

  return (
    <section className="py-12">
      <div style={{ borderTop: '1px solid var(--divider)', paddingTop: '3rem' }}>
        <h2
          className="text-base font-semibold mb-6 text-center"
          style={{ color: 'var(--text-1)' }}
        >
          How was this session?
        </h2>
        <div className="flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <button
              key={s}
              onClick={() => pick(s)}
              onMouseEnter={() => setHover(s)}
              onMouseLeave={() => setHover(0)}
              className="transition-transform hover:scale-110"
              aria-label={`Rate ${s} stars`}
            >
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill={(hover || rating) >= s ? 'var(--accent)' : 'none'}
                stroke={(hover || rating) >= s ? 'var(--accent)' : 'var(--text-3)'}
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </button>
          ))}
        </div>
        {saved && (
          <p className="text-center text-sm mt-4" style={{ color: 'var(--text-2)' }}>
            Thank you for your rating.
          </p>
        )}
      </div>
    </section>
  );
}

// ── Comments ──────────────────────────────────────────

interface Comment {
  id: string;
  name: string;
  text: string;
}

function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    setComments((prev) => [
      { id: Date.now().toString(), name: name.trim(), text: text.trim() },
      ...prev,
    ]);
    setName('');
    setText('');
    setDone(true);
    setTimeout(() => setDone(false), 3000);
  };

  return (
    <section
      className="py-12"
      style={{ borderTop: '1px solid var(--divider)' }}
    >
      <h2
        className="text-base font-semibold mb-8"
        style={{ color: 'var(--text-1)' }}
      >
        Thoughts from Listeners
      </h2>

      {comments.length === 0 ? (
        <p className="text-sm mb-8" style={{ color: 'var(--text-2)' }}>
          Be the first to share your thoughts.
        </p>
      ) : (
        <div className="space-y-5 mb-8">
          {comments.map((c) => (
            <div key={c.id}>
              <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-1)' }}>
                {c.name}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                {c.text}
              </p>
            </div>
          ))}
        </div>
      )}

      <form onSubmit={submit} className="flex flex-col gap-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          maxLength={60}
          className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors"
          style={{
            background: 'var(--surface-2)',
            color: 'var(--text-1)',
            border: '1px solid var(--divider)',
          }}
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What stayed with you after listening?"
          maxLength={500}
          rows={3}
          className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-none transition-colors"
          style={{
            background: 'var(--surface-2)',
            color: 'var(--text-1)',
            border: '1px solid var(--divider)',
          }}
        />
        <div className="flex items-center justify-between">
          <span className="text-sm" style={{ color: 'var(--accent)' }}>
            {done ? 'Shared. Thank you.' : ''}
          </span>
          <button
            type="submit"
            disabled={!name.trim() || !text.trim()}
            className="text-sm font-medium px-5 py-2.5 rounded-full transition-opacity hover:opacity-80 disabled:opacity-30"
            style={{ background: 'var(--text-1)', color: 'var(--surface)' }}
          >
            Share
          </button>
        </div>
      </form>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────

export function ListeningPage() {
  return (
    <main className="pt-[80px] pb-24 px-6">
      <div className="max-w-page mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm mb-12 transition-opacity hover:opacity-60"
          style={{ color: 'var(--text-2)' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <Player />

        <section
          className="py-12 mt-4"
          style={{ borderTop: '1px solid var(--divider)' }}
        >
          <div className="space-y-4 text-sm leading-[1.8]" style={{ color: 'var(--text-2)' }}>
            <p>Most of us move through life without ever slowing down.</p>
            <p>Days become weeks. Weeks become years.</p>
            <p>
              This listening session is a gentle invitation to pause, reflect and reconnect
              with what truly matters.
            </p>
            <p>No complicated ideas. No endless motivation.</p>
            <p>Just one perspective that might stay with you long after it ends.</p>
          </div>
        </section>

        <RatingSection />
        <CommentsSection />
      </div>
    </main>
  );
}
