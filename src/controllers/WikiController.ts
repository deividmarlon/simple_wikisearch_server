import { Request, Response } from 'express';

import SearchAtWikiService from '../services/SearchAtWikiService';

export default class AppointmentsController {
  public async getWikiIntro(request: Request, response: Response): Promise<Response> {
    const { search_term } = request.params;

    const searchAtWiki = new SearchAtWikiService();

    const wikiIntro = await searchAtWiki.execute({
        search_term
    });

    console.log(wikiIntro);
    return response.json(wikiIntro);
  }
}
