const getTheTitles = function(books) {
    return books.map((item, index, array) => {
        return item.title;
    })
};  

// Do not edit below this line
module.exports = getTheTitles;
