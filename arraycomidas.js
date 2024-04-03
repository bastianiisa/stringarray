const comidaspreferidas = ["Sushi", "Strogonoff", "Polenta", "Carreteiro", "Hamburguer"];
console.log(comidaspreferidas);

console.log("Essas são minhas comidas preferidas:", comidaspreferidas.join("\n"));
//
const readlineSync = require('readline-sync');

array = ["Sushi", "Strogonoff", "Polenta", "Carreteiro", "Hamburguer"];
const comidapreferida = readlineSync.question("Qual sua comida preferida?");
array[1] = comidapreferida
console.log(array)

