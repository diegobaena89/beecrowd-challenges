/*
Dois carros (X e Y) partem em uma mesma direção. O carro X sai com velocidade constante de 60 Km/h e o carro Y sai com velocidade constante de 90 Km/h.

Em uma hora (60 minutos) o carro Y consegue se distanciar 30 quilômetros do carro X, ou seja, consegue se afastar um quilômetro a cada 2 minutos.

Leia a distância (em Km) e calcule quanto tempo leva (em minutos) para o carro Y tomar essa distância do outro carro.

Entrada
O arquivo de entrada contém um número inteiro.

Saída
Imprima o tempo necessário seguido da mensagem "minutos".
*/

// Solution 1
function distancia(dist) {
  let carroA = 60;
  let diferençaEmQuilometros = 30;
  let toaldistancia = (carroA * dist) / diferençaEmQuilometros;
  return `${toaldistancia} minutos`;
}
console.log(distancia(110));

// Solution 2
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var dist = parseInt(lines.shift());
var carroA = 60;
var diferençaEmQuilometros = 30;

var toaldistancia = (carroA * dist) / diferençaEmQuilometros;
console.log(`${toaldistancia} minutos`);
