let output = document.querySelector('.output');
let showObject = "";

fetch('./cars.json')
    .then((response) => response.json())
    .then((cars) => {
        // LOOP DOOR ARRAY MET OBJECTEN.
        for (let car of cars) {
            // met backticks zet je variablen IN je text.
            showObject += `
            <section class = "carStyling">
             <h2>${car.brand}</h2>
             <h3>${car.model}</h3>
            </section>
            `;
        }

        output.innerHTML = showObject
    })

