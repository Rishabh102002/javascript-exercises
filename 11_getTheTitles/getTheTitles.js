const getTheTitles = function(array) {
    newarr=[];
    array.forEach(object => {
        newarr.push(object.title);
    });
    return newarr;
};
// Do not edit below this line
module.exports = getTheTitles;
