/*
Faça um programa que calcule e mostre o volume de uma esfera sendo fornecido o valor de seu raio (R). A fórmula para calcular o volume é: (4/3) * pi * R3. Considere (atribua) para pi o valor 3.14159.

Dica: Ao utilizar a fórmula, procure usar (4/3.0) ou (4.0/3), pois algumas linguagens (dentre elas o C++), assumem que o resultado da divisão entre dois inteiros é outro inteiro.

Entrada
O arquivo de entrada contém um valor de ponto flutuante (dupla precisão), correspondente ao raio da esfera.

Saída
A saída deverá ser uma mensagem "VOLUME" conforme o exemplo fornecido abaixo, com um espaço antes e um espaço depois da igualdade. O valor deverá ser apresentado com 3 casas após o ponto.
*/

// solution 1
function esfera(raio) {
  let pi = 3.14159;
  const volume = (4 / 3.0) * pi * (raio * raio * raio);
  return `VOLUME = ${volume.toFixed(3)}`;
}

console.log(esfera(3));

// Solution 2
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var raio = parseInt(lines.shift());
var pi = 3.14159;
var volume = (4 / 3.0) * pi * (raio * raio * raio);
console.log('VOLUME = ' + volume.toFixed(3));
