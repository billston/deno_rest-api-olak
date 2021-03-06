import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes/deno.routes.ts";

const app: Application = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log('server running on port', 3000);
await app.listen({port: 3000});