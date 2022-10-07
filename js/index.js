
let cocteles = [];

fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
    .then( response => response.json())
    .then( response => {
        cocteles = response.drinks;
    })
    .catch( err => console.log(err));

fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
    .then( response => response.json())
    .then( response => {
        cocteles = cocteles.concat(response.drinks);
        cargarDatos();
    })
    .catch( err => console.log(err));

function cargarDatos(){
    let listCocteles = document.getElementById('listCocteles');
    let data = '';
    for(let coctel of cocteles){
        data += `
            <div class="card">
                <img src="${coctel.strDrinkThumb}" alt="image">
                <div class="body">
                    <h2 class="title">${coctel.strDrink}</h2>
                    <h3 class="subtitle">Ingredientes</h3>
                        ${details?.strIngredient1}
                    <span class="categories">${details?.strAlcoholic}</span>
                    <button class="btn">Comprar</button>
                </div>
            </div>
        `;
    }
    listCocteles.innerHTML = data;
}
