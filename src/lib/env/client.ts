import { ClientEnvSchema, type ClientKey } from "./schema";

const env = ClientEnvSchema.parse(import.meta.env);

const getClientEnv = (key: ClientKey) => env[key];

export { getClientEnv };
