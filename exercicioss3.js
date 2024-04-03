const readlineSync = require('readline-sync');

let listaDeTarefas = []
const tarefas = readlineSync.question("Cite uma tarefa que precisa realizar no dia:");
const tarefas2 = readlineSync.question("Cite uma tarefa que precisa realizar no dia:");
const tarefas3 = readlineSync.question("Cite uma tarefa que precisa realizar no dia:");

listaDeTarefas.push(tarefas, tarefas2, tarefas3);

console.log(listaDeTarefas);

let realizado = readlineSync.question("Digite o indice das tarefas ja realizadas:");
listaDeTarefas.splice(realizado, i);
console.log(listaDeTarefas);