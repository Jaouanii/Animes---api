
// recuperer les donnée par la route /api/anime :::::

const getAnimes = async () => {
    // recuperer l'id dans l'url :
    const id = document.location.href.split("/").pop();
    console.log(id);


    // configurer la requete HTTP
    const requestInfos = new Request(`https://localhost:3001/api/animes/${id}`, {
        method: 'GET'
    })
    const request = await fetch(requestInfos);

    const response = await request.json();

    return response;
}

// console.log(getAnimes());

const content = document.querySelector(".content");

// recuperer les données

getAnimes().then((data) => {
    let html = 
            `
            <article>
            
            <h2>${data.name}</h2>
            <p>
            <img src="${data.img}">
            </p>
            <p>${data.description}</p>
            <button> 
            <a href="/" > home </a>
            </button>

            </article>
            `
    content.innerHTML = html;
});

e