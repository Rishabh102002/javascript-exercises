const add = function(a,b) {
  return a+b;
};

function subtract(a,b) {
  if(a>=b){
    return a-b;
  }
  else{
    return b-a;
  }

}

const sum = function(array) {
  let sum =0;
	array.forEach((item) => {
    sum+=item;
  });
  return sum;	
};

const multiply = function(array) {
  let ans =1;
	array.forEach((item) => {
    ans*=item;
  });
  return ans;	
};

const power = function(a,b) {
  return a**b;
};

const factorial = function(n) {
  let ans=1;
	for(let i = 1; i<=n; i++ ){
    ans*=i;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
