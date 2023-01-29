const nums = [3, 4, 5, 6, 7];

//Example of Sum using Reduce 
const product = nums.reduce((total, curValue) => {
    return total * curValue;
});

console.log(product)

const grades = [87, 64, 96, 92, 88,99,73,70]

//Example of Max using reduces
const maxGrades = grades.reduce((max, currVal)=> {
    if (currVal > max) return currVal;
    return max;
})
console.log(maxGrades)
