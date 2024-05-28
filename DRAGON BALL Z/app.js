let output = document.querySelector('.output');
let characterZ = ''


fetch(`https://dragonball-api.com/api/characters?limit=59`)
    .then((response) => response.json())
    .then((characters) => {

        for (let character of characters.items) {
            characterZ += `
            <article class="characterStyling">
            <img src="${character.image}" alt="${character.name}">
            <div class = "characterInfo">
            <h1>${character.name}</h1>
            <p>Ki: ${character.ki}</p>
            <p>Max ki: ${character.maxKi}</p>
            <p>Affiliation: ${character.affiliation}</p>
            <p>Race: ${character.race}</p>
            <p>Gender: ${character.gender}</p>
            </div>
            </article>
            `;
        }



        output.innerHTML = characterZ
    });
