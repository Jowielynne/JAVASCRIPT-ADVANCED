let output = document.querySelector('.output');
let out = '';

const product = {
    name: "Chez Pizza",
    img: "./img/chez.jpg"
}

output.innerHTML = `
<div class = "productStyling">
<h1>${product.name}</h1>
<img src = "${product.img}" alt = "${product.name}">
</div>
`;