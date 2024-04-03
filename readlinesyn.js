//crie uma variável que vai referenciar a biblioteca
const readlineSync = require('readline-sync');

//fazendo perguntas e armazenando as respostas
const nome = readlineSync.question("Qual o seu nome?");
const idade = readlineSync.question("Qual a sua idade?");
const cidade = readlineSync.question("Qual a sua cidade?");

//exibindo as respostas
console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("Cidade: " + cidade);

