import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig, loadEnv } from "vite";

import { ServerEnvSchema } from "./src/lib/env/schema.ts";

export default defineConfig(({ mode }) => {
  const rawEnv = loadEnv(mode, process.cwd(), "");
  const env = ServerEnvSchema.parse(rawEnv);

  return {
    server: {
      port: 3000,
    },
    resolve: {
      tsconfigPaths: true,
    },
    plugins: [
      devtools(),
      tailwindcss(),
      tanstackStart({
        prerender: {
          enabled: true,
          crawlLinks: true,
        },
        sitemap: {
          enabled: true,
          host: env.VITE_APP_URL,
        },
      }),
      nitro({ preset: "vercel" }),
      viteReact(),
    ],
  };
});
