module.exports = function getZerosCount(number) {
var mas = [];
var f = number;
var s = 0;
var a;
  for(var i = 1; i <= Math.floor(number/5); i++){
    a = i*5;
    while(a%5 == 0){
      a = a/5;
      s++;
    }
  }
  return s;
}
