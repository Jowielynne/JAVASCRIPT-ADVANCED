let output = document.querySelector('.output');
let out = '';

const product = {
    name: "Chez Pizza",
    img: "./img/chez.jpg"
}

output.innerHTML = `
<div class = "productStyling">
<p>${product.name}</p>
<img src = "${product.img}" alt = "${product.name}">
</div>
`;