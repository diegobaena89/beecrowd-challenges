/*
Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

Entrada
O arquivo de entrada contém 3 valores com uma casa decimal, de dupla precisão (double).

Saída
Imprima a mensagem "MEDIA" e a média do aluno conforme exemplo abaixo, com 1 dígito após o ponto decimal e com um espaço em branco antes e depois da igualdade. Assim como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".
*/

// Solution 1
function media(a, b, c) {
  let nota1 = (a * 2.0).toFixed(1);
  let nota2 = (b * 3.0).toFixed(1);
  let nota3 = (c * 5.0).toFixed(1);
  let media = ((nota1 * nota2 * nota3) / 10).toFixed(1);

  return `MEDIA = ${media}`;
}

console.log(media(2.3, 3.5, 8.5));

// Solution 2
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

var media = parseFloat((A * 2.0 + B * 3.0 + C * 5.0) / 10).toFixed(1);

console.log('MEDIA = ' + media);
