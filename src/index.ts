import { Hono } from "hono";
import { parseENV } from "./config/env";

parseENV();

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default {
  fetch: app.fetch,
  port: Bun.env.PORT,
};
