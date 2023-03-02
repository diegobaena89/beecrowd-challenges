/*
Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.
*/

// Solution 1
let lines = input.split('\n');
let line1 = lines.shift().split(' ');
let line2 = lines.shift().split(' ');

let IdItemUm = line1[0];
let numPecaUm = line1[1];
let vlrPecaUm = line1[2];
let IdItemDois = line2[0];
let numPecaDois = line2[1];
let vlrPecaDois = line2[2];

let totalPecaUm = numPecaUm * vlrPecaUm;
let totalPecaDois = numPecaDois * vlrPecaDois;
let total = totalPecaUm + totalPecaDois;

console.log('VALOR A PAGAR: R$ ' + total.toFixed(2));
