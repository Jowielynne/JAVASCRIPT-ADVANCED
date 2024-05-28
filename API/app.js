let output = document.querySelector('.output');

fetch(`https://dragonball-api.com/api/characters`)
    .then((response) => response.json())
    .then((characters) => {
        for(let character of characters.items){

            

        }
    });