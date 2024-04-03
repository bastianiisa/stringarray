const readlineSync = require('readline-sync');

const nome = readlineSync.question("Qual o seu nome?");
const email = readlineSync.question("Qual o seu endereço de e-mail?");

console.log("O e-mail " + email + " foi cadastrado com sucesso. Seja bem-vindo(a) " + nome);


