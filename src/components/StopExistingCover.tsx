export function StopExistingCover({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Stop Existing. Start Living."
    >
      <rect width="400" height="400" fill="#080808" />

      {/* STOP */}
      <text
        x="200"
        y="86"
        textAnchor="middle"
        fill="white"
        fontFamily="'Arial Black', 'Arial Bold', Arial, sans-serif"
        fontSize="72"
        fontWeight="900"
        letterSpacing="-1"
      >
        STOP
      </text>

      {/* EXISTING. with strikethrough */}
      <text
        x="200"
        y="153"
        textAnchor="middle"
        fill="white"
        fontFamily="'Arial Black', 'Arial Bold', Arial, sans-serif"
        fontSize="60"
        fontWeight="900"
        letterSpacing="-1"
      >
        EXISTING.
      </text>
      {/* Manual strikethrough line across EXISTING. */}
      <line
        x1="32"
        y1="133"
        x2="368"
        y2="133"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* AND */}
      <text
        x="200"
        y="218"
        textAnchor="middle"
        fill="white"
        fontFamily="'Arial Black', 'Arial Bold', Arial, sans-serif"
        fontSize="72"
        fontWeight="900"
        letterSpacing="-1"
      >
        AND
      </text>

      {/* START */}
      <text
        x="200"
        y="294"
        textAnchor="middle"
        fill="white"
        fontFamily="'Arial Black', 'Arial Bold', Arial, sans-serif"
        fontSize="72"
        fontWeight="900"
        letterSpacing="-1"
      >
        START
      </text>

      {/* LIVING. */}
      <text
        x="200"
        y="370"
        textAnchor="middle"
        fill="white"
        fontFamily="'Arial Black', 'Arial Bold', Arial, sans-serif"
        fontSize="72"
        fontWeight="900"
        letterSpacing="-1"
      >
        LIVING.
      </text>
    </svg>
  );
}
