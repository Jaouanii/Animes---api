import { getAllAnimes, getAnimeById } from "../services/animeService.js";

const index = (req, res) => res.json(getAllAnimes());


const details = (req, res) => {


    const { id } = req.params;
    
    // console.log(getAnimeById(id));
    
    res.json(getAnimeById(id));
}

export { index, details }




