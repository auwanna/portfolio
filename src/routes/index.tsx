import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";

import glorious from "@/assets/images/artwork/glorious.png";
import grand from "@/assets/images/artwork/grand.png";
import great from "@/assets/images/artwork/great.png";
import { IconArrowSquareIn, IconGithub, IconSpotify } from "@/components/icons";
import { ExternalLink, type ExternalLinkProps } from "@/components/link";
import { Section } from "@/components/ui/section";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography";
import { socials } from "@/lib/links";

type Artist = {
  name: string;
  lang?: string;
};

type Song = {
  title: string;
  href: ExternalLinkProps["href"];
  lang: string;
  image: string;
  artists: Artist[];
};

const songs: Song[] = [
  {
    lang: "ja",
    title: "どうなったっていい",
    href: "https://www.youtube.com/watch?v=Y5qlKUAcv94",
    image: "https://i.scdn.co/image/ab67616d0000b273029961db9f594c213a7ff739?format=webp",
    artists: [{ name: "Dannie May", lang: "en" }],
  },
  {
    lang: "en",
    title: "Wriggle",
    href: "https://www.youtube.com/watch?v=VpQhVl-WkHo",
    image: "https://i.scdn.co/image/ab67616d0000b273945a09a57d17ba084d94134f?format=webp",
    artists: [{ name: "Cosmo Sheldrake", lang: "en" }],
  },
  {
    lang: "en",
    title: "Bad Bad News",
    image: "https://i.scdn.co/image/ab67616d0000b273d8ba7edac14684336ba0f507?format=webp",
    href: "https://www.youtube.com/watch?v=cztfyj1dVgk",
    artists: [{ name: "Leon Bridges", lang: "en" }],
  },
];

type Image = {
  src: string;
  alt: string;
  title: string;
};

const artwork: Image[] = [
  { src: great, title: "great", alt: "poorly drawn stickman with a santa hat" },
  { src: grand, title: "grand", alt: "poorly drawn gingerbread man" },
  { src: glorious, title: "glorious", alt: "poorly drawn christmas tree" },
];

export const Route = createFileRoute("/")({
  component: () => {
    return (
      <div className="mx-auto flex min-h-dvh max-w-lg flex-col gap-16">
        <main className="mt-16 flex flex-col gap-4 px-3 max-sm:px-6">
          <TypographyH1 className="uppercase">jacob</TypographyH1>
          <Section data-nosnippet>
            <div className="flex items-center justify-between">
              <TypographyH2>code.</TypographyH2>
              <ExternalLink
                label={socials[0].label}
                href={socials[0].href}
                className="hover:text-primary focus-visible:text-primary focus-visible:outline-primary -m-2 inline-flex rounded p-2 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <IconGithub className="size-6" aria-hidden="true" />
              </ExternalLink>
            </div>
            <TypographyP variants={{ size: "sm" }}>What should I show...</TypographyP>
          </Section>

          <Section data-nosnippet>
            <div className="flex items-center justify-between">
              <TypographyH2>draw.</TypographyH2>
            </div>
            <TypographyP variants={{ size: "sm" }}>
              No artwork yet but imagine something great, grand, and glorious
            </TypographyP>
            <ul className="xs:grid-cols-3 grid grid-cols-2 gap-2 sm:ml-[calc(50%-min(100vw,var(--container-xl))/2)] sm:w-xl">
              {artwork.map((x) => {
                return (
                  <li
                    key={x.src}
                    className="border-border relative aspect-square overflow-hidden rounded-2xl border bg-black/10"
                  >
                    <img src={x.src} alt={x.alt} className="pixelated absolute bottom-0 z-0" />
                    <span
                      aria-hidden="true"
                      className="font-display text-muted absolute -right-2 bottom-0 text-2xl uppercase opacity-40 select-none"
                    >
                      {x.title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Section>
          <Section data-nosnippet>
            <div className="flex items-center justify-between">
              <TypographyH2>listen.</TypographyH2>
              <ExternalLink
                href={socials[1].href}
                label={socials[1].label}
                className="hover:text-primary focus-visible:text-primary focus-visible:outline-primary -m-2 inline-flex rounded p-2 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <IconSpotify className="size-6" aria-hidden="true" />
              </ExternalLink>
            </div>
            <TypographyP variants={{ size: "sm" }}>My favorite songs at the moment</TypographyP>
            <ul className="flex flex-col">
              {songs.map((song) => (
                <li key={song.title}>
                  <ExternalLink
                    href={song.href}
                    className="group flex w-full items-center gap-1 py-2 pr-2 focus-visible:outline-offset-4"
                  >
                    <div className="flex grow gap-3 font-sans transition-[translate] motion-safe:group-hover:translate-x-3">
                      <div className="overflow-hidden rounded-xl drop-shadow-md">
                        <img src={song.image} alt="" className="aspect-square size-16" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <TypographyP className="font-bold" lang={song.lang}>
                          {song.title}
                        </TypographyP>
                        <span className="text-muted text-sm">
                          {song.artists.map((artist, index) => (
                            <React.Fragment key={`${song.title}:${artist.name}:${index}`}>
                              {index > 0 && (index === song.artists.length - 1 ? " & " : ", ")}
                              <span lang={artist.lang}>{artist.name}</span>
                            </React.Fragment>
                          ))}
                        </span>
                      </div>
                    </div>

                    <span
                      aria-hidden="true"
                      className="ease-fluid mt-1 scale-100 self-start opacity-0 transition-[scale,opacity,translate] group-hover:opacity-100 group-hover:delay-0 group-focus-visible:opacity-100 group-focus-visible:delay-0 motion-safe:group-hover:translate-x-1 motion-safe:group-hover:scale-110 motion-safe:group-focus-visible:translate-x-1 motion-safe:group-focus-visible:scale-110"
                    >
                      <IconArrowSquareIn className="icon text-muted size-[1em] stroke-2" />
                    </span>
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </Section>
        </main>
        <footer className="isolate flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-base">
          <div className="mx-auto" data-nosnippet>
            <nav aria-label="Social links">
              <ul className="flex flex-wrap items-center gap-2">
                {socials.map((social) => (
                  <li key={social.name}>
                    <ExternalLink
                      href={social.href}
                      className="hover:text-primary focus-visible:text-primary focus-visible:outline-primary -m-2 inline-flex rounded p-2 lowercase focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      {social.name}
                    </ExternalLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    );
  },
});
