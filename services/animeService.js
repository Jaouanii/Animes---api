// import le chichier json
import json from '../json/anime.json' assert { type: 'json' };

// recuperer tous les animes:

const getAllAnimes = () => json;

const getAnimeById = (id) => json.find((anime) => anime.id === +id);

export { getAllAnimes, getAnimeById };