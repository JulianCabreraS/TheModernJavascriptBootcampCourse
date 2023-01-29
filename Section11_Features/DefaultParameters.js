function multiply(x, y = 1) {
    return x * y;
}
console.log(multiply(5));

const greet  =(person, greeting='hi', puntuaction="!")=> {
    console.log(`${greeting}, ${person} ${puntuaction}`)
}

greet('anya');
