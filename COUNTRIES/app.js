let output = document.querySelector('.grid-container');
let countryCount = ''


fetch(` https://restcountries.com/v3.1/all`)
    .then((response) => response.json())
    .then((countries) => {
        console.log(countries)
        for (let country of countries) {
            console.log(country);
            countryCount += `
        <article class = "country-card">
        <p class = "country-name">${country.name.common}</p>
        <img src = "${country.flags.png}" alt = "${country.name.common}" class = "country-flag">
        </article>
        `
        }



        output.innerHTML = countryCount
    });