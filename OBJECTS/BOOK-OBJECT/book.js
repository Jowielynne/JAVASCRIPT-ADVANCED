let output = document.querySelector('.output');
let out = '';

const book = {
    title: 'Harry Potter and the Philisopher\'s stone.',
    author: 'J.K. Rowling',
    publish: 'Bloomsbury (UK) Scholastic (US)',
    year: '1997, June 26th',
    sold: '500+ million, worldwide.',
    price: 'OG COPY: 4000-ish pounds, new copies have different prices guaranteed above 30 euros.'
}

output.innerHTML = `
<p>${book.title}</p>
<p>${book.author}</p>
<p>${book.publish}</p>
<p>${book.year}</p>
<p>${book.sold}</p>
<p>${book.price}</p>
`;