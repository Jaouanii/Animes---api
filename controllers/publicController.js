// middelware relier a la route 

const index = (req, res) => res.sendFile(`${process.cwd()}/views/index.html`)

// middleware relier a la route /anime/id
const details = (req, res) => res.sendFile(`${process.cwd()}/views/anime-details.html`)

export { index, details };