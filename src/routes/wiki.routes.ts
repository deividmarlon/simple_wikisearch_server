import { Router } from 'express';

import WikiController from '../controllers/WikiController';

const wikiRouter = Router();

const appointmentsController = new WikiController();

wikiRouter.get('/:search_term', appointmentsController.getWikiIntro);

export default wikiRouter;
