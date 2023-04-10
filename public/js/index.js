
// recuperer les données ::::

const getAllAnimes = async () => {
    // configurer la requete HTTP
    const requestInfos = new Request("https://localhost:3001/api/animes", {
        method: 'GET'
    })
    const request = await fetch(requestInfos);

    const response = await request.json();

    return response;
}

// console.log(getAllAnimes());

const content = document.querySelector(".content");


// recuperer les données

getAllAnimes().then((data) => {
    let html = '';

    data.map(value => {
        html +=
            `
            <article>
            
            <h2>${value.name}</h2>
            <p>
            <img src="${value.img}">
            </p>
            <p>${value.description}</p>
            <button> 
            <a href="/animes/${value.id}" > details</a>
            </button>

            </article>
            `
    })
    content.innerHTML = html;
});

