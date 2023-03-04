/*
Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, segundo a fórmula:

Entrada
O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.

Saída
Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.
*/

// Solution 1
function distancia(x1, x2, y1, y2) {
  let dist = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  return dist.toFixed(4);
}
console.log(distancia(1.0, 5.0, 7.0, 9.0));

// Solution 2
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [x1, y1] = lines.shift().split(' ');
var [x2, y2] = lines.shift().split(' ');

var total = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
console.log(total.toFixed(4));
