import axios from 'axios';

interface IResponseDTO {
    search_term: string;
    wikit_intro: string;
}

interface IRequestDTO {
    search_term: string;
}

class SearchAtWikiService{
    public async execute ({search_term}:IRequestDTO): Promise<IResponseDTO> {

        const wikipediaResponse = await axios.get('https://en.wikipedia.org/w/api.php',{
            params:{
                format:'json',
                action:'query',
                prop:'extracts',
                exintro:true,
                explaintext:true,
                redirects:1,
                titles:search_term
            }
        })
        const wikipediaIntroFromResponse = wikipediaResponse.data.query.pages[Object.keys(wikipediaResponse.data.query.pages)[0]].extract

        const responseDTO = {
            search_term,
            wikit_intro : wikipediaIntroFromResponse
        } 

        return responseDTO;

    }
}

export default SearchAtWikiService;