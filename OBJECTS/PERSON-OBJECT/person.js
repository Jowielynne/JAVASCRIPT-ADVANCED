let output = document.querySelector('.output');
let out = '';

const person = {
    name: 'Shrek',
    age: 44,
    dob: 'December 24 1391',
    gender: 'Male',
    alive: true,
    hobbies: [ 'bullying kids' , '2', '3', '4' ],
    changeName: function (newName){
       this.name = newName
    },
    changeAlive: function (newStatus){
        this.alive = newStatus
    },
    addHobby: function(extraHobby){
        this.hobbies.push(extraHobby) 
    }
}

person.changeName("Green Ogre")
person.changeAlive(false)
person.addHobby("eating")


output.innerHTML = `
<p>${person.name}</p>
<p>${person.age}</p>
<p>${person.dob}</p>
<p>${person.gender}</p>
<p>${person.alive}</p>
<p>${person.hobbies}</p>
`;

