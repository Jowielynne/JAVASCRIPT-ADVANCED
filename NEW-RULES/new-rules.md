# New Rules Javascript.

## Functions.
Typ hier in eigen woorden je uitleg, because you forget things you dumb piece of kaka.

```
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
```
() = parameters  
{} = make sure to keep the codes organised within every function.

NORMAL FUNCTION = De oude manier van een function maken.    
ARROW FUNCTION = Nieuwe manier van een function maken.

VARIABELEN IN EEN STRING = wordt in het voorbeeld gebruikt, het '+' teken wordt dan niet meer gebruikt, ipv de `` tekens en ${} (parameter)
```
// MAAK EEN ARRAY VAN AUTO'S MET 3 AUTO MERKEN.
// DIT IS EEN FOR-LOOP.
let cars = ["Mercedes", "Audi", "BMW"];
console.log(cars);

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// FOR-OFF LOOP.
for(let car of cars){
    console.log(car)
}
```

### EXPLANATION: 
FOR-LOOP = Oude manier van een item opvragen in een array.   
FOR-OFF LOOP = Nieuwe manier van een item opvragen in een array.


### JSON:
"" = string.
`` = Zet je variabelen in je text. (dat zijn backticks)

fetch('./cars.json')
    .then((response) => response.json())