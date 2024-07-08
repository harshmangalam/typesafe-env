import * as z from "zod";

// Create zod schema for env
const envSchema = z.object({
  DATABASE_URL: z.string(),
  JWT_SECRET: z.string(),
  PORT: z.coerce.number().min(1000).max(65535),
  MAINTENANCE_MODE: z.coerce.boolean(),
});

export async function parseENV() {
  try {
    envSchema.parse(Bun.env);
  } catch (err) {
    console.error("Invalid Env variables Configuration::::", err);
    process.exit(1);
  }
}

declare module "bun" {
  interface Env extends z.TypeOf<typeof envSchema> {}
}
