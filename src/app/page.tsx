"use client";

import { useRef } from "react";
import type { MouseEvent } from "react";
import videos from "../assets/data/videosList.json";

type Video = {
  titulo: string;
  urlImagen: string;
  time: string;
  views: string;
  owner: string;
  linkAds: string;
  urlVideo: string;
};

const videoList = videos as Video[];

function BrandMark() {
  return (
    <a
      className="inline-flex shrink-0 items-center gap-2 text-[#efb33f] no-underline"
      href="#inicio"
      aria-label="Malpornado home"
    >
      <span className="grid size-8 place-items-center" aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none" className="size-full">
          <path
            d="M20 2.5 24.1 13l10.5-4.1-4.1 10.5L41 23.5l-10.5 4.1 4.1 10.5-10.5-4.1L20 44.5l-4.1-10.5L5.4 38.1l4.1-10.5L-1 23.5l10.5-4.1L5.4 8.9 15.9 13 20 2.5Z"
            fill="currentColor"
          />
          <path
            d="M10 15h4.2v2.3c1.2-1.8 2.8-2.7 4.8-2.7 2.2 0 3.7 1 4.4 2.9 1.3-1.9 3-2.9 5.1-2.9 3.2 0 5 2.1 5 6V29h-4.5v-7.7c0-2-.7-3-2.1-3-1.6 0-2.7 1.4-2.7 3.6V29h-4.5v-7.7c0-2-.7-3-2.1-3-1.6 0-2.7 1.4-2.7 3.6V29H10V15Z"
            fill="#11110f"
          />
        </svg>
      </span>
      <span className="text-[21px] font-extrabold tracking-[-0.075em] text-[#f6f4ef]">
        <span className="text-[#efb33f]">mal</span>pornado
      </span>
    </a>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-[17px] fill-none stroke-current stroke-[1.8]"
    >
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  );
}

export default function Home() {
  const clickCounts = useRef<Record<string, number>>({});

  function handleVideoClick(
    event: MouseEvent<HTMLAnchorElement>,
    video: Video,
  ) {
    event.preventDefault();

    const key = video.urlVideo;
    const clickCount = (clickCounts.current[key] ?? 0) + 1;
    clickCounts.current[key] = clickCount;

    if (clickCount <= 2) {
      const adUrl = video.linkAds?.trim();
    
        const adTab = window.open(adUrl, "_blank");
        if (adTab) {
          adTab.opener = null;
          adTab.focus();
        }
      

      return;
    }

    window.open(video.urlVideo, "_blank");
    // window.location.assign(video.urlVideo);
  }

  return (
    <main
      id="inicio"
      className="min-h-screen bg-[#10100f] bg-[radial-gradient(ellipse_at_55%_-20%,rgba(238,167,43,0.075),transparent_42%)] text-[#f4f1eb]"
    >
      <div className="flex min-h-[32px] items-center justify-center gap-2 bg-[#0b0b0a] px-4 py-1 text-[11px] tracking-wide text-[#a09d96]">
        <span className="rounded border border-[#73551e] px-1.5 py-0.5 text-[9px] font-extrabold text-[#f4ba4a]">
          18+
        </span>
        Adults only. Browse responsibly.
      </div>

      <header className="sticky top-0 z-20 border-b border-[#292824] bg-[#111110]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[70px] w-[calc(100%-32px)] max-w-[1440px] items-center gap-8 sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]">
          <BrandMark />

          <nav
            className="hidden h-full items-center gap-7 md:flex"
            aria-label="Main navigation"
          >
            <a
              className="relative flex h-full items-center text-[13px] font-semibold text-[#f6f4ef] after:absolute after:inset-x-0 after:bottom-[-1px] after:h-0.5 after:bg-[#eeb13e]"
              href="#videos"
            >
              Home
            </a>
            <a
              className="flex h-full items-center text-[13px] font-semibold text-[#aaa79f] transition hover:text-white"
              href="#videos"
            >
              Videos
            </a>
            <a
              className="flex h-full items-center text-[13px] font-semibold text-[#aaa79f] transition hover:text-white"
              href="#categorias"
            >
              Categories
            </a>
          </nav>

          <div className="ml-auto flex h-10 w-full max-w-[390px] overflow-hidden rounded-lg border border-[#34332e] bg-[#1d1d1b] focus-within:border-[#b7862e]">
            <input
              type="search"
              aria-label="Search videos"
              placeholder="Search videos..."
              className="min-w-0 flex-1 bg-transparent px-3 text-xs text-[#f6f4ef] outline-none placeholder:text-[#817e77]"
            />
            <button
              type="button"
              aria-label="Search"
              className="grid w-11 shrink-0 place-items-center border-l border-[#34332e] bg-[#252522] text-[#d7d2c8]"
            >
              <SearchIcon />
            </button>
          </div>
        </div>
      </header>

      <section
        id="videos"
        className="mx-auto w-[calc(100%-32px)] max-w-[1440px] pb-14 sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]"
      >
        <div className="mb-5 flex items-end justify-between">
          <div>
            <div className="mb-2 mt-5 text-[8px] font-extrabold tracking-[0.17em] text-[#b99043]">
              COMMUNITY PICKS
            </div>
            <h2 className="flex items-center gap-2.5 text-lg font-bold tracking-tight sm:text-xl">
              Featured videos
            </h2>
          </div>
          <button
            type="button"
            className="rounded-md border border-[#36352f] bg-[#191917] px-2.5 py-2 text-[9px] text-[#c1bdb3] sm:px-3 sm:text-[10px]"
          >
            Recommended <span className="pl-2 text-[#88847b]">⌄</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-x-2.5 gap-y-6 sm:gap-x-3.5 md:grid-cols-3 md:gap-x-4 md:gap-y-7 xl:grid-cols-4 xl:gap-x-[18px]">
          {videoList.map((video, index) => (
            <article className="min-w-0" key={`${video.urlVideo}-${index}`}>
              <a
                className="group relative block aspect-video overflow-hidden rounded-md border border-[#35332e] bg-[#22211e] sm:rounded-lg"
                href={video.urlVideo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Watch: ${video.titulo}`}
                onClick={(event) => handleVideoClick(event, video)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="size-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-75"
                  src={video.urlImagen}
                  alt=""
                  loading={index < 8 ? "eager" : "lazy"}
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute right-1.5 bottom-1.5 rounded border border-white/10 bg-black/80 px-1.5 py-1 text-[8px] font-bold tabular-nums text-white sm:right-2 sm:bottom-2 sm:text-[10px]">
                  {video.time}
                </span>
                <span className="absolute top-1/2 left-1/2 grid size-10 -translate-x-1/2 -translate-y-[42%] scale-90 place-items-center rounded-full border border-white/50 bg-black/60 text-white opacity-0 transition group-hover:translate-y-[-50%] group-hover:scale-100 group-hover:opacity-100">
                  <svg
                    viewBox="0 0 24 24"
                    className="size-5"
                    aria-hidden="true"
                  >
                    <path
                      d="M9 6.8v10.4L17 12 9 6.8Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>

              <div className="pt-2 sm:pt-2.5">
                <a
                  className="line-clamp-2 text-[10px] leading-[1.45] font-semibold text-[#e9e6df] no-underline transition hover:text-[#f0b640] sm:text-xs"
                  href={video.urlVideo}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={video.titulo}
                  onClick={(event) => handleVideoClick(event, video)}
                >
                  {video.titulo}
                </a>
                <a
                  className="mt-1.5 block truncate text-[9px] text-[#aaa69c] no-underline hover:text-[#efb33f] sm:text-[10px]"
                  href={video.urlVideo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => handleVideoClick(event, video)}
                >
                  {video.owner}
                </a>
                <div className="mt-1 flex items-center gap-1.5 text-[8px] text-[#77746d] sm:text-[9px]">
                  <span>{video.views} views</span>
                  <span className="text-[#b18c46]">·</span>
                  <span>Video</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="mx-auto flex min-h-[76px] w-[calc(100%-32px)] max-w-[1440px] items-center justify-between border-t border-[#2a2925] sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]">
        <BrandMark />
        <span className="text-[8px] text-[#77746d] sm:text-[10px]">
          For adults aged 18 and over.
        </span>
      </footer>
    </main>
  );
}
