const findTheOldest = function(array) {
    let oldestPerson = array[0];
    const currentYear = new Date().getFullYear();
    array.forEach(object => {
        if (!object.hasOwnProperty('yearOfDeath')) {
            object.yearOfDeath = currentYear;
          }
        if(object.yearOfDeath-object.yearOfBirth> oldestPerson.yearOfDeath-oldestPerson.yearOfBirth){
            oldestPerson= object;
        }
    });
    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
