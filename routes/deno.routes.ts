import { Router } from "https://deno.land/x/oak/mod.ts";

const router: Router = new  Router();

router.get('/', ({response}) => {
    response.body = 'Hello billston';
});

export default router;