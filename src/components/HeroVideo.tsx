"use client";

import { useRef, useState } from "react";
import { FaPlay, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showReplay, setShowReplay] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const replay = () => {
    const video = videoRef.current;
    if (!video) return;
    // Clicking is a user gesture, so it is safe to turn sound on here
    // (browsers only block autoplay with audio, not click-triggered playback).
    video.muted = false;
    setIsMuted(false);
    video.currentTime = 0;
    void video.play().then(() => setShowReplay(false)).catch(() => setShowReplay(true));
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <div className="relative w-full max-w-none overflow-hidden rounded-2xl border border-white/15 shadow-2xl lg:ml-auto">
      <video
        ref={videoRef}
        src="/images/herosection%20video.mp4"
        autoPlay
        muted={isMuted}
        playsInline
        preload="auto"
        className="aspect-video w-full object-cover"
        onEnded={() => setShowReplay(true)}
        onPause={() => setShowReplay(true)}
      />

      <button
        type="button"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/55 text-white transition-colors hover:bg-black/75"
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>

      {showReplay && (
        <button
          type="button"
          onClick={replay}
          aria-label="Play video with sound"
          className="absolute inset-0 grid place-items-center bg-[rgba(8,21,51,0.45)] transition-colors hover:bg-[rgba(8,21,51,0.6)]"
        >
          <span className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-[var(--navy-deep)]" style={{ background: "linear-gradient(135deg, var(--gold), var(--gold-2))" }}>
            <FaPlay /> Watch Again
          </span>
        </button>
      )}
    </div>
  );
}
