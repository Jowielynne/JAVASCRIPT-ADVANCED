let output = document.querySelector('.output');
let out = '';

const person = {
    name: 'a',
    age: 'a',
    dob: 'a',
    gender: 'a',
    status: 'a',
    hobbies: [ 'help' , '2', '3', '4' ],
    changeName: function (newName){
       this.name = newName
    }

    changeStatus: function(){
        if (this.status ===)
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