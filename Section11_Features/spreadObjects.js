const feline = {
    legs: 4,
    family: 'Felidae'
};

const canine = {
    family: 'Caninae',
    furry: true,
    legs: 4
};

const dog = {
    ...canine,
    isPet: true,
    adorable: true
};
//{family: "Caninae", furry: true, legs: 4, isPet: true, adorable: true}
console.log(dog);

const tripod = {
    ...canine,
    legs: 3,
}
//{family: "Caninae", furry: true, legs: 3}
