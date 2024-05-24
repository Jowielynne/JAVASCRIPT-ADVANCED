let output = document.querySelector('.birthday__profiles')
let profileCard = ''

fetch('./birthday.json')
    .then((response) => response.json())
    .then((profiles) => {
        // LOOP DOOR ARRAY MET OBJECTEN.
        for (let profile of profiles) {
            // met backticks zet je variablen IN je text.
            profileCard += `
                    <article class = "profileStyling">
                    <h2>${profile.name}</h2>
                     <h3>${profile.age}</h3>
                    </article>
                    `;
        }

        output.innerHTML = profileCard
    })
