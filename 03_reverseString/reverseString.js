const reverseString = function(str) {
    let reversestr ="";
    for (let i=str.length-1; i >=0; i--){
        reversestr+= str.at(i);
    }
    return reversestr;
};

// Do not edit below this line
module.exports = reverseString;
