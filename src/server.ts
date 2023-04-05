import { env } from "./env";
import { app } from "./app";

app
  .listen({
    port: env.PORT,
  })
  .then((port) => console.log("Http server running on port " + port));
