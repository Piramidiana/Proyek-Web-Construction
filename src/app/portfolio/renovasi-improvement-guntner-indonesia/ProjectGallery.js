"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const photos = Array.from(
  { length: 65 },
  (_, index) =>
    `/images/guntner-indonesia/photo-${String(index + 1).padStart(2, "0")}.jpg`,
);

const videos = [
  "/images/guntner-indonesia/video-01.mp4",
  "/images/guntner-indonesia/video-02.mp4",
];

export default function ProjectGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    if (selectedIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowRight") {
        setSelectedIndex((current) => (current + 1) % photos.length);
      }
      if (event.key === "ArrowLeft") {
        setSelectedIndex(
          (current) => (current - 1 + photos.length) % photos.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  const showPrevious = () => {
    setSelectedIndex(
      (current) => (current - 1 + photos.length) % photos.length,
    );
  };

  const showNext = () => {
    setSelectedIndex((current) => (current + 1) % photos.length);
  };

  return (
    <>
      <section className="py-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-black uppercase md:text-3xl">
            Video Proyek
          </h2>
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
            2 Video
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {videos.map((video, index) => (
            <div
              key={video}
              className="overflow-hidden rounded-2xl border border-white/10 bg-black"
            >
              <video
                controls
                playsInline
                preload="metadata"
                className="aspect-video w-full bg-black object-contain"
                aria-label={`Video dokumentasi proyek ${index + 1}`}
              >
                <source src={video} type="video/mp4" />
                <track
                  kind="captions"
                  src="/images/guntner-indonesia/captions-id.vtt"
                  srcLang="id"
                  label="Bahasa Indonesia"
                  default
                />
                Browser Anda tidak mendukung pemutar video.
              </video>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 pt-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-black uppercase md:text-3xl">
            Galeri Foto
          </h2>
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
            65 Foto
          </span>
        </div>

        <div className="columns-2 gap-3 md:columns-3 md:gap-5 lg:columns-4">
          {photos.map((photo, index) => (
            <button
              key={photo}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="group relative mb-3 block w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900 text-left transition hover:border-yellow-500/70 md:mb-5"
              aria-label={`Buka foto dokumentasi ${index + 1}`}
            >
              <Image
                src={photo}
                alt={`Dokumentasi proyek PT. Güntner Indonesia ${index + 1}`}
                width={900}
                height={1200}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="h-auto w-full transition duration-500 group-hover:scale-[1.03] group-hover:opacity-90"
              />
              <span className="absolute bottom-2 right-2 rounded-full bg-black/70 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
                {index + 1}
              </span>
            </button>
          ))}
        </div>
      </section>

      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm md:p-10">
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl font-bold text-white transition hover:bg-yellow-500 hover:text-black md:right-8 md:top-8"
            aria-label="Tutup foto"
          >
            ✕
          </button>

          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-yellow-500 hover:text-black md:left-8"
            aria-label="Foto sebelumnya"
          >
            ‹
          </button>

          <div className="relative h-[82vh] w-[88vw]">
            <Image
              src={photos[selectedIndex]}
              alt={`Dokumentasi proyek PT. Güntner Indonesia ${selectedIndex + 1}`}
              fill
              priority
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={showNext}
            className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-yellow-500 hover:text-black md:right-8"
            aria-label="Foto berikutnya"
          >
            ›
          </button>

          <div className="absolute bottom-4 rounded-full bg-white/10 px-4 py-2 text-xs font-bold tracking-widest text-white backdrop-blur-sm md:bottom-7">
            {selectedIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
}
