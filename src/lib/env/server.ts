import { ServerEnvSchema, type ServerKey } from "./schema";

const getServerEnv = (key: ServerKey) => ServerEnvSchema.parse(process.env)[key];

export { getServerEnv };
