let output = document.querySelector('.output');
let countryCount = ''


fetch(` https://restcountries.com/v3.1/all`)
    .then((response) => response.json())
    .then((countries) => {
        console.log(countries)
        for (let country of countries) {
        console.log(country);
        countryCount += `
        <article class = "countryStyling">
        
        </article>
        `
        }



        output.innerHTML = countryCount
    });