# ParImpar - Biblioteca JavaScript

Esta é uma biblioteca JavaScript simples para verificar se um número é par ou ímpar.

## Instalação

```bash
npm install @felipe_albornoz/parimpar
```

## Uso

```javascript
const { isEven, isOdd } = require('@felipe_albornoz/parimpar');

console.log(isEven(4)); // true
console.log(isOdd(3));  // true
console.log(isEven(5)); // false
console.log(isOdd(6));  // false
```

## Funções

- `isEven(num)` - Retorna true se o número for par
- `isOdd(num)` - Retorna true se o número for ímpar

Ambas as funções lançam um erro se o parâmetro não for um número inteiro.