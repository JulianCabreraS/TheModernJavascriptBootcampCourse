const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director'
const person2 = 'Jamers Cameron'
// const team = {};
// team[role] = person;

const team = {
    [role]: person,
    [role2]: person2
}

console.log(team)
