module.exports = function getZerosCount(number) {
var mas = [];
var f = 0;
  for(var i = 1; i <= Math.floor(number/5); i++){
    mas[i] = i*5;
  }
  for(var k = 0; k<mas.length; k++){
    while(mas[k]%5 == 0){
      mas[k] = mas[k]/5;
      f++;
    }
  }
  return f;
}
