import {Router} from 'express';

import wikiRouter from './wiki.routes';

const routes = Router();

routes.use('/wikiIntro',wikiRouter);

export default routes;