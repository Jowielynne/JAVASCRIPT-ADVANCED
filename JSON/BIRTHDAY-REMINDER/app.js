let output = document.querySelector('.birthday__profiles');
let clearButton = document.querySelector('.clear-btn');
let profileCard = '';

fetch('./birthday.json')
    .then((response) => response.json())
    .then((profiles) => {
        document.querySelector('h1').textContent = `${profiles.length} Birthdays Today`;

        // Loop door array met objecten
        for (let profile of profiles) {
            // Met backticks zet je variabelen IN je tekst
            profileCard += `
                <article class="profileStyling">
                    <img src="${profile.picture}" alt="${profile.name}">
                    <div>
                        <h2>${profile.name}</h2>
                        <h3>${profile.age} years old</h3>
                    </div>
                </article>
            `;
        }

        output.innerHTML = profileCard;
    });

clearButton.addEventListener('click', () => {
    output.innerHTML = '';
    document.querySelector('h1').textContent = '0 Birthdays Today';
});
