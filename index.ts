import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app: Application = new Application();
const router: Router = new  Router();

router.get('/', ({response}) => {
    response.body = 'Hello world';
});

app.use(router.routes());

console.log('server running on port', 3000);
await app.listen({port: 3000});