/*
Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

Entrada
O arquivo de entrada contém um texto (primeiro nome do vendedor) e 2 valores de dupla precisão (double) com duas casas decimais, representando o salário fixo do vendedor e montante total das vendas efetuadas por este vendedor, respectivamente.

Saída
Imprima o total que o funcionário deverá receber, conforme exemplo fornecido.
*/

// Solution 1
function salaryWithBonus(name, fixedSalary, totalOfSells) {
  let totalWithBonus = totalOfSells * 0.15;
  let totalSalary = totalWithBonus + fixedSalary;

  return `${name}\n${totalSalary.toFixed(2)}`;
}

console.log(salaryWithBonus('Joao', 500.0, 1230.3));
// Solution 2
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nome = String(lines.shift());
var salarioFixo = parseFloat(lines.shift());
var totalDeVendas = parseFloat(lines.shift());

var comissao = totalDeVendas * 0.15 + salarioFixo;
console.log('TOTAL = R$ ' + comissao.toFixed(2));
