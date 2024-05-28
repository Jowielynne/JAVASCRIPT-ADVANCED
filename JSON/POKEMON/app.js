<<<<<<< Updated upstream
let output = document.querySelector('.pokemon')
=======
let output = document.querySelector('.pokemon');
>>>>>>> Stashed changes
let pokemonBreed = ''

fetch('./pokemon.json')
    .then((response) => response.json())
    .then((pokemons) => {
        // LOOP DOOR ARRAY MET OBJECTEN.
        for (let pokemon of pokemons) {
            // met backticks zet je variablen IN je text.
            pokemonBreed += `
                    <article class = "pokemonStyling">
                    <h2>${pokemon.name}</h2>
                    <img src = "${pokemon.img}" alt = "${pokemon.name}">
                    </article>
                    `;
        }

        output.innerHTML = pokemonBreed

    })