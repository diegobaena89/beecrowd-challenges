/*
alcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km) e o total de combustível gasto (em litros).

Entrada
O arquivo de entrada contém dois valores: um valor inteiro X representando a distância total percorrida (em Km), e um valor real Y representando o total de combustível gasto, com um dígito após o ponto decimal.

Saída
Apresente o valor que representa o consumo médio do automóvel com 3 casas após a vírgula, seguido da mensagem "km/l".
*/

// Solution 1
function consumoDeGasolina(distancia, combustivel) {
  const total = distancia / combustivel;
  return `${total.toFixed(3)} km/l`;
}

console.log(consumoDeGasolina(500, 35.0));

// Solution 2
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var distanciaPercorrida = parseInt(lines.shift());
var combustivelGasto = parseFloat(lines.shift());
var total = distanciaPercorrida / combustivelGasto;

console.log(total.toFixed(3) + ' km/l');
