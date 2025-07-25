const removeFromArray = function(arr, ...manyArgs) {
    let res = arr.filter(item => {
        
        return (!manyArgs.includes(item));
    })
    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
