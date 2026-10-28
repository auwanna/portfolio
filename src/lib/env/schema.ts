import * as z from "zod";

export const ClientEnvSchema = z.object({
  VITE_APP_TITLE: z.string().min(1, "VITE_APP_TITLE is missing"),
  VITE_APP_URL: z.url({ error: "VITE_APP_URL is missing or invalid" }),
});

export const ServerEnvSchema = z.object({
  VITE_APP_TITLE: z.string().min(1, "VITE_APP_TITLE is missing"),
  VITE_APP_URL: z.url({ error: "VITE_APP_URL is missing or invalid" }),
  NODE_ENV: z.enum(["development", "production", "test"]),
});

export type ClientKey = keyof z.infer<typeof ClientEnvSchema>;
export type ServerKey = keyof z.infer<typeof ServerEnvSchema>;
