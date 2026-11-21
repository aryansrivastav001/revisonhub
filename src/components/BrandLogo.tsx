import Image from "next/image";
import logo from "../../public/images/logo.png";

type BrandLogoProps = {
  /** Rendered size in pixels (square). */
  size?: number;
  className?: string;
  priority?: boolean;
};

/**
 * Brand mark shown in the header and footer.
 * Statically importing the PNG gives it a content-hashed URL, so replacing
 * public/images/logo.png always serves the new image instead of a cached one.
 */
export default function BrandLogo({ size = 64, className = "", priority = false }: BrandLogoProps) {
  return (
    <span
      className={`relative inline-block shrink-0 overflow-hidden rounded-xl bg-white ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={logo}
        alt="RevisioN Hub logo"
        fill
        sizes={`${size}px`}
        className="object-contain"
        priority={priority}
      />
    </span>
  );
}
