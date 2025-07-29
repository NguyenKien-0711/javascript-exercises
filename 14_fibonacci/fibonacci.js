const fibonacci = function(number) {
    if (number == 0) return 0;
    if (number < 0) return "OOPS"
    let arr = [1, 1];
    for (let i = 0; i < Number(number); ++i) {
        arr.push(Number(arr[i]) + Number(arr[i + 1])); 
    }
    return Number(arr[number - 1]);
};

// Do not edit below this line
module.exports = fibonacci;
