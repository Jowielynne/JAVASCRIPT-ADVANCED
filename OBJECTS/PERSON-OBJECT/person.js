let output = document.querySelector('.output');
let out = '';

const person = {
    name: 'Kanel',
    age: '19',
    dob: '12th June',
    gender: 'Male',
    status: 'Alive',
    hobbies: [ 'help' , '2', '3', '4' ],
    changeName: function (newName){
       this.name = newName
    }

}



output.innerHTML = `
<p>${person.name}</p>
<p>${person.age}</p>
<p>${person.dob}</p>
<p>${person.gender}</p>
<p>${person.status}</p>
<p>${person.hobbies}</p>
`;

person.changeName("Toon")