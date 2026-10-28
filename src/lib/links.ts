import { IconJoystick, IconGithub } from "@/components/icons";

export const icons = {
  game: IconJoystick,
  github: IconGithub,
} as const;

type Category = keyof typeof icons;

export type Project = Readonly<{
  id: number;
  href: `https://${string}`;
  name: string;
  summary: string;
  category: Category;
}>;

export const projects: Project[] = [
  {
    id: 1,
    name: "play",
    href: "https://play.jacobbolden.com",
    summary: "games that i made on a whim",
    category: "game",
  },
];

export const socials = [
  {
    label: "Github",
    href: "https://github.com/auwanna",
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/user/314o7wlavfgqvxo35f4kikii5tvi",
  },
  {
    label: "Twitch",
    href: "https://twitch.tv/auwanna",
  },
] as const;
