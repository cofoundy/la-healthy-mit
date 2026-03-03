export default function Logo({ className = "w-10 h-10", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Heart shape with rooster crest integrated */}
      <path
        d="M32 58S6 42 6 22c0-8.8 7-15.4 15.4-15.4 4.4 0 8.4 2 10.6 5.2C34.2 8.6 38.2 6.6 42.6 6.6 51 6.6 58 13.2 58 22c0 20-26 36-26 36z"
        fill={color}
      />
      {/* Rooster crest on top of heart */}
      <path
        d="M28 6.6c0 0-2-6.6 4-6.6s4 3.3 6 3.3c2 0 3-2.2 5-2.2 2.5 0 2 4.4-1 6.6"
        fill={color}
      />
      {/* Small beak detail */}
      <circle cx="38" cy="18" r="2" fill="white" opacity="0.3" />
    </svg>
  );
}
