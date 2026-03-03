import { img } from "@/lib/constants";

export default function Logo({
  className = "w-10 h-10",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  // The original logo is a black silhouette on transparent bg.
  // "dark" = shows as dark (for light backgrounds)
  // "light" = inverted to white (for dark backgrounds like hero)
  return (
    <img
      src={img("/images/logo-icon.webp")}
      alt="La Healthy Mit"
      className={`${className} object-contain ${
        variant === "light" ? "brightness-0 invert" : ""
      }`}
    />
  );
}
