import { createFileRoute } from "@tanstack/react-router";

import glorious from "@/assets/images/artwork/glorious.png";
import grand from "@/assets/images/artwork/grand.png";
import great from "@/assets/images/artwork/great.png";
import { IconArrowRight, IconGithub, IconSpotify } from "@/components/icons";
import { ExternalLink } from "@/components/link";
import { Section } from "@/components/ui/section";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography";
import { projects, icons, socials } from "@/lib/links";

const songs = [
  {
    title: "どうなったっていい",
    artist: "Dannie May",
    image: "https://i.scdn.co/image/ab67616d0000b273029961db9f594c213a7ff739?format=webp",
    link: "https://www.youtube.com/watch?v=Y5qlKUAcv94",
  },
  {
    title: "Wriggle",
    artist: "Cosmo Sheldrake",
    image: "https://i.scdn.co/image/ab67616d0000b273945a09a57d17ba084d94134f?format=webp",
    link: "https://www.youtube.com/watch?v=VpQhVl-WkHo",
  },
  {
    title: "Bad Bad News",
    artist: "Leon Bridges",
    image: "https://i.scdn.co/image/ab67616d0000b273d8ba7edac14684336ba0f507?format=webp",
    link: "https://www.youtube.com/watch?v=cztfyj1dVgk",
  },
] as const;

const artwork: Record<string, string> = {
  great,
  grand,
  glorious,
} as const;

export const Route = createFileRoute("/")({
  component: () => {
    return (
      <div className="mx-auto flex min-h-dvh max-w-lg flex-col">
        <main className="mt-48 flex flex-col gap-4 px-3">
          <TypographyH1 className="uppercase">jacob</TypographyH1>
          <Section>
            <TypographyH2 className="flex items-center justify-between">
              <span>code.</span>
              <ExternalLink
                href={socials[0].href}
                className="hover:text-primary focus-visible:text-primary"
              >
                <IconGithub className="size-6" />
              </ExternalLink>
            </TypographyH2>
            <nav aria-label="projects">
              <ul
                style={{ "--project-total": projects.length } as React.CSSProperties}
                className="flex flex-col gap-2"
              >
                {projects.map((project, idx) => {
                  const Icon = icons[project.category];

                  return (
                    <li key={project.name}>
                      <ExternalLink
                        href={project.href}
                        className="group flex w-full translate-0 items-center pr-2 opacity-100 starting:translate-y-5 starting:opacity-0"
                      >
                        <div className="flex grow gap-3 pl-2 transition-[translate] group-hover:translate-x-3">
                          <div className="text-muted flex flex-col items-end gap-1">
                            <span className="font-display text-base italic tabular-nums">
                              {`${idx + 1}`.padStart(2, "0")}.
                            </span>
                            <Icon className="icon size-4" />
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="font-display self-start text-base font-medium tracking-tight lowercase">
                              {project.name}.
                            </span>
                            <p className="group-hover:text-foreground text-muted text-sm lowercase transition-[color]">
                              {project.summary}
                            </p>
                          </div>
                        </div>
                        <span className="ease-fluid mt-1 scale-100 self-start opacity-0 transition-[scale,opacity,translate] group-hover:translate-x-1 group-hover:scale-110 group-hover:opacity-100 group-hover:delay-0 group-focus-visible:translate-x-1 group-focus-visible:scale-110 group-focus-visible:opacity-100 group-focus-visible:delay-0">
                          <IconArrowRight
                            className="icon text-muted size-[1em] stroke-2"
                            aria-label="go to link"
                          />
                        </span>
                      </ExternalLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </Section>

          <Section>
            <TypographyH2>draw.</TypographyH2>
            <TypographyP size="sm">
              No artwork yet but imagine something great, grand, and glorious
            </TypographyP>
            <ul className="xs:grid-cols-3 grid grid-cols-2 gap-2 sm:ml-[calc(50%-min(100vw,var(--container-xl))/2)] sm:w-xl">
              {["great", "grand", "glorious"].map((text) => {
                return (
                  <li
                    key={text}
                    className="border-border relative aspect-square overflow-hidden rounded-2xl border bg-black/10"
                  >
                    <img
                      src={artwork[text]}
                      className="absolute bottom-0 z-0 [image-rendering:pixelated]"
                    />
                    <span className="font-display text-muted absolute -right-2 bottom-0 text-2xl uppercase opacity-40 select-none">
                      {text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Section>

          <Section>
            <TypographyH2 className="flex items-center justify-between">
              <span>listen.</span>
              <ExternalLink
                href={socials[1].href}
                className="hover:text-primary focus-visible:text-primary"
              >
                <IconSpotify className="size-6" />
              </ExternalLink>
            </TypographyH2>
            <TypographyP size="sm">My favorite songs at the moment</TypographyP>
            <ul className="flex flex-col">
              {songs.map((song) => {
                return (
                  <li key={song.title}>
                    <ExternalLink
                      href={song.link}
                      className="group flex w-full translate-0 items-center gap-1 py-1 pr-2 opacity-100 focus-visible:outline-offset-4 starting:translate-y-5 starting:opacity-0"
                    >
                      <div className="flex grow gap-3 font-sans transition-[translate] group-hover:translate-x-3">
                        <div className="overflow-hidden rounded-xl drop-shadow-md">
                          <img src={song.image} className="aspect-square size-16" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <TypographyP className="font-bold">{song.title}</TypographyP>
                          <span className="text-muted text-sm">{song.artist}</span>
                        </div>
                      </div>

                      <span className="ease-fluid mt-1 scale-100 self-start opacity-0 transition-[scale,opacity,translate] group-hover:translate-x-1 group-hover:scale-110 group-hover:opacity-100 group-hover:delay-0 group-focus-visible:translate-x-1 group-focus-visible:scale-110 group-focus-visible:opacity-100 group-focus-visible:delay-0">
                        <IconArrowRight
                          className="icon text-muted size-[1em] stroke-2"
                          aria-label="go to link"
                        />
                      </span>
                    </ExternalLink>
                  </li>
                );
              })}
            </ul>
          </Section>
        </main>
        <footer className="isolate mt-16 flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-base">
          <nav aria-label="social links" className="mx-auto">
            <ul className="flex flex-wrap items-center gap-2">
              {socials.map((social) => {
                return (
                  <li key={social.label}>
                    <ExternalLink
                      href={social.href}
                      title={social.label}
                      className="text-muted text-sm font-bold lowercase underline-offset-2 transition-[color] hover:underline"
                    >
                      <span>{social.label}</span>
                    </ExternalLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </footer>
      </div>
    );
  },
});
