export default function LeafDecoration({ position = "left", className = "" }: { position?: "left" | "right"; className?: string }) {
  const isLeft = position === "left";

  return (
    <div
      className={`absolute pointer-events-none opacity-20 animate-leaf ${
        isLeft ? "left-0 top-0" : "right-0 top-0"
      } ${className}`}
      style={{ animationDelay: isLeft ? "0s" : "3s" }}
    >
      <svg
        className={`w-32 h-48 sm:w-48 sm:h-72 ${isLeft ? "" : "scale-x-[-1]"}`}
        viewBox="0 0 200 300"
        fill="none"
      >
        {/* Main leaf */}
        <path
          d="M100 0C60 40 10 100 20 180c5 40 30 70 60 90 10-30 20-70 20-120 0 50 10 90 20 120 30-20 55-50 60-90C190 100 140 40 100 0z"
          fill="#3D7A35"
          opacity="0.6"
        />
        {/* Vein */}
        <path
          d="M100 20v250"
          stroke="#5A9E50"
          strokeWidth="1.5"
          opacity="0.4"
        />
        {/* Side veins */}
        <path
          d="M100 60L60 100M100 100L50 150M100 140L55 190M100 180L65 220M100 60L140 100M100 100L150 150M100 140L145 190M100 180L135 220"
          stroke="#5A9E50"
          strokeWidth="0.8"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}
