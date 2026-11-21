"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Global scroll-reveal: fade-in-up on headings, paragraphs, cards, list items
 * etc., re-triggered EVERY time the element re-enters the viewport.
 *
 * HYDRATION-SAFE: we do NOT touch React-owned attributes (className, style,
 * data-*, ...). With Next.js 16's time-sliced hydration, an effect that adds
 * data-* attributes to server-rendered elements can run BEFORE those elements
 * are hydrated, which produces a hydration mismatch. The Web Animations API
 * keeps the animation entirely outside React's vdom, so there is nothing for
 * React to compare during hydration.
 */

const SELECTOR = "h1, h2, h3, h4, p, img, .card, li, blockquote";

const FADE_UP: Keyframe[] = [
  { opacity: 0, transform: "translateY(28px)" },
  { opacity: 1, transform: "translateY(0)" },
];

// Hover-lift cards/buttons need their CSS transform untouched, so animate
// opacity only for those.
const FADE_ONLY: Keyframe[] = [{ opacity: 0 }, { opacity: 1 }];

const OPTIONS: KeyframeAnimationOptions = {
  duration: 600,
  easing: "ease-out",
  fill: "both",
};

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const animations = new Map<Element, Animation>();
    const initialised = new WeakSet<Element>();

    const hide = (anim: Animation) => {
      anim.pause();
      anim.currentTime = 0;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const anim = animations.get(entry.target);
          if (!anim) continue;

          if (!initialised.has(entry.target)) {
            // Already on screen on first paint: show it immediately, no intro
            // animation (same as the old "shown" state).
            initialised.add(entry.target);
            if (entry.isIntersecting) anim.finish();
            else hide(anim);
            continue;
          }

          if (entry.isIntersecting) {
            anim.currentTime = 0;
            anim.play();
          } else {
            hide(anim);
          }
        }
      },
      { rootMargin: "0px 0px -22% 0px", threshold: 0 }
    );

    const scan = () => {
      document.querySelectorAll(SELECTOR).forEach((el) => {
        if (animations.has(el)) return;

        const fadeOnly =
          el.matches(".card, .btn-gold, .btn-outline, tbody tr") ||
          el.classList.contains("transition-transform");

        const anim = el.animate(fadeOnly ? FADE_ONLY : FADE_UP, OPTIONS);
        hide(anim);
        animations.set(el, anim);
        observer.observe(el);
      });
    };

    const frame = requestAnimationFrame(scan);
    // Catches elements added later (filters, tab switches, etc.).
    const interval = window.setInterval(scan, 300);

    return () => {
      cancelAnimationFrame(frame);
      window.clearInterval(interval);
      observer.disconnect();
      animations.forEach((anim) => anim.cancel());
      animations.clear();
    };
  }, [pathname]);

  return null;
}
