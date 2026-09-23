import { defineConfig } from "drizzle-kit";

// `generate` (and `up`) build migrations from ./drizzle/schema.ts alone and
// never open a connection, so they must keep working without DATABASE_URL set.
// Only the commands that talk to a live database really need one.
const connectionString = process.env.DATABASE_URL ?? "";
const requiresDatabase = process.argv.slice(2).some((arg) => ["migrate", "push", "pull", "studio"].includes(arg));

if (requiresDatabase && !connectionString) {
  throw new Error("DATABASE_URL is required to run drizzle commands");
}

export default defineConfig({
  schema: "./drizzle/schema.ts",
  out: "./drizzle",
  dialect: "mysql",
  dbCredentials: {
    url: connectionString,
  },
});
