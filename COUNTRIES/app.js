let output = document.querySelector('.output');
let characterZ = ''


fetch(`https://restcountries.com/v3.1/all/`)
    .then((response) => response.json())
    .then((characters) => {

        for (let character of characters.items) {
            
        }



        output.innerHTML = characterZ
    });