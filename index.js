function isEven(num) {
  if (typeof num !== 'number' || !Number.isInteger(num)) {
    throw new Error('O parâmetro deve ser um número inteiro');
  }
  return num % 2 === 0;
}
 
function isOdd(num) {
  if (typeof num !== 'number' || !Number.isInteger(num)) {
    throw new Error('Deve ser um número inteiro');
  }
  return num % 2 !== 0;
}

module.exports = {
  isEven,
  isOdd
};