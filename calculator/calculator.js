const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((acc,curr)=>{
    acc+=curr;
  },0);
};

const multiply = function() {
  return arr.reduce((acc,curr)=>{
    acc*=curr;
  },1);

};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  let fact = 1;
	for(let i=1;i<=a;i++){
     fact*=i;
  }
  return fact;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
