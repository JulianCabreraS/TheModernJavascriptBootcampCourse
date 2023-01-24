function multiplyBy(num){
    return function(x){
        return x*num;
    }
}

const triple = multiplyBy(3)
console.log(triple(2))
