// NORMAL FUNCTION.
function changeName(name) {
    return "JE VADER IS EEN" + name;
    //VARIABELEN TONEN IN EEN STRING.
    `Hallo mijn naam is ${name}`;
}

changeName("pannenkoek.");

// ARROW FUNCTION.
const changeName = (name) => {
    return 'JE VADER IS EEN' + name;
};

// MAAK EEN ARRAY VAN AUTO'S MET 3 AUTO MERKEN.
// DIT IS EEN FOR-LOOP.
let cars = ["Mercedes", "Audi", "BMW"];
console.log(cars);

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// FOR-OFF LOOP.
for (let car of cars) {
    console.log(car)
}

