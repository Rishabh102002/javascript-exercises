const palindromes = function (string) {
    let str = cleanString(string);

    for (let j = str.length-1; j >= 0; j--) {
        i=0
        if(str[i]===str[j]){
            for (let x = j; x > str.length-j; x--) {
                if(str[x]!==str[i]){
                    return false;
                }
                else{
                    i+=1;
                }
                
            }
            return true;
        }
        
    }
};
function cleanString(str){
    str=str.toLowerCase();
    let newstr= "";
    for (let index = 0; index < str.length; index++) {
        if(str[index]== "," || str[index]== "." || str[index]== " "){
            continue;
        }
        else{
            newstr+=str[index];
        }
    }
    return newstr;
};
// Do not edit below this line
module.exports = palindromes;
