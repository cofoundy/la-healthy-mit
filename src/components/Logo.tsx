export default function Logo({ className = "w-10 h-10", color = "#2D5A27" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Rooster crest (top of heart) */}
      <path
        d="M34 12c0-4 2-8 6-10 3-1.5 5 1 7 2.5 1.5 1.2 3 .5 5-.5 2.5-1.2 4 .5 3.5 3.5-.4 2.5-2.5 4-5 4.5"
        fill={color}
      />
      {/* Heart body */}
      <path
        d="M40 72S8 50 8 28c0-9.6 7.8-17.2 17.2-17.2 5 0 9.6 2.2 12.4 5.8L40 20l2.4-3.4c2.8-3.6 7.4-5.8 12.4-5.8C64.2 10.8 72 18.4 72 28c0 22-32 44-32 44z"
        fill={color}
      />
      {/* Eye detail */}
      <circle cx="48" cy="22" r="2.5" fill="white" opacity="0.3" />
    </svg>
  );
}
