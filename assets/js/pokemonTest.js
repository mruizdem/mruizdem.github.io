// fetch all the pokemon data on page load
let pokemonData;
async function fetchPokemonData (columnCount) {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12").then(res => res.json());
    console.log(response.results);
    pokemonData = response;

    let mainBody = document.getElementById("mainContainer");

    // counter to keep track 
    let pokemonCountInRow = 0;
    let row;

    for (let i = 0; i < pokemonData.results.length; i++) {
        let pokeData = await fetch(pokemonData.results[i].url).then(res => res.json());

        // build the row
        if (pokemonCountInRow % columnCount === 0) {
            row = document.createElement("div");
            row.classList.add("pokeRow", "row", "gap-2");
            mainBody.append(row);
        }

        
        // build the columns
        let pokemonEntry = document.createElement("div");
        pokemonEntry.classList.add("poke", "col", "border", "border-white", "border-2", "rounded-3", "text-center", "g-2", "d-flex", "flex-column", "align-items-center");
        row.appendChild(pokemonEntry);
    
        // build the entries
        // append the image to the col
        let pokeSprite = document.createElement("img");
        pokeSprite.src = pokeData.sprites.front_default;
        pokemonEntry.appendChild(pokeSprite);
    
        // append the name to the col
        let pokeName = document.createElement("p");
        pokeName.innerText = pokeData.name;
        pokemonEntry.appendChild(pokeName);
        
        // append the type to the col
        let pokeType = document.createElement("p");
        pokeType.innerText = pokeData.types[0].type.name;
        pokemonEntry.appendChild(pokeType);

        pokemonCountInRow++;
    }
}

let genSelect = document.querySelector(".generationSelection");
let pokeBtnOne = document.querySelector("#pokeBtnOne");
let pokeBtnTwo = document.querySelector("#pokeBtnTwo");

pokeBtnOne.addEventListener ("click", () => {
    fetchPokemonData(3);
    genSelect.remove();
});