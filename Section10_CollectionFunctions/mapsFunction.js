const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

const doubles = numbers.map(function (num) {
    return num * 2;
});

console.log(doubles)

const isEven = numbers.map(function(n){
    return {
        value: n,
        isEven: n%2===0
    }
})

console.log(isEven)
