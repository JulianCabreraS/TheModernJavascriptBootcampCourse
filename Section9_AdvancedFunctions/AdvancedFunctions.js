function add(x, y) {
    return x + y;
}

const substract = function (x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
}

const divide = function (x, y) {
    return x / y;
};

const operations = [add, substract, multiply, divide];

function callThreeTimes(f){
    f();
    f();
    f();
}

function cry(){
    console.log('boo hoo I am so sad')
}

callThreeTimes(cry)
