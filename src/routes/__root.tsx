/// <reference types="vite/client" />

import { TanStackDevtools } from "@tanstack/react-devtools";
import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import favicon from "@/assets/images/avatar.png";
import og from "@/assets/images/og.png?url";
import css from "@/assets/styles/app.css?url";
import { getClientEnv } from "@/lib/env/client";
import { seo } from "@/lib/seo";

export const Route = createRootRoute({
  head: () => {
    const url = getClientEnv("VITE_APP_URL");
    const title = getClientEnv("VITE_APP_TITLE");

    return {
      links: [
        { href: favicon, rel: "icon" },
        { href: url, rel: "canonical" },
        { href: css, rel: "stylesheet" },
      ],
      meta: [
        { charSet: "utf-8" },
        { content: "width=device-width, initial-scale=1", name: "viewport" },
        { content: "index, follow", name: "robots" },
        { content: "index, follow", name: "googlebot" },
        ...seo({
          author: "Jacob",
          description: "jacob likes doing anything and everything",
          title,
          url,
          image: {
            url: og,
            height: 64,
            width: 64,
            alt: "person in a santa hat",
          },
        }),
      ],
    };
  },
  component: () => {
    return (
      <html>
        <head>
          <HeadContent />
        </head>
        <body className="text-foreground bg-background bg-noise font-sans antialiased">
          <div id="app_root" className="min-h-svh">
            <Outlet />
          </div>

          <TanStackDevtools />
          <Scripts />
        </body>
      </html>
    );
  },
});
