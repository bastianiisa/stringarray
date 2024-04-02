//são listas de elementos, no js usamos colchetes para agrupar os itens


const listaDeCompras = ["morango", "banana", "aveia"]
const listaDeNumeros = [22, 13, 19, 44]
//acessando um elemento
const segundoItem = listaDeCompras[0] //"morango"

const raçasDeGato = ["sphynx", "russian blue", "maine coon", "british shorthair", "scottish fold"]
const quartoItem = raçasDeGato[4]
console.log(quartoItem)
console.log(raçasDeGato.length)

const seriesBoas = ["Breaking Bad", "Orange Is The New Black"]
seriesBoas.includes("Orange Is The New Black") // true
seriesBoas.includes("Greys Anatomy") //false

//método push
const numeros = [1,2,3]
numeros.push(4)
console.log(numeros) // [1,2,3,4]

//método pop()
const meusGatos = ["kami", "levi", "milly"]
meusGatos.pop()
console.log(meusGatos) // ["kami", "levi"]

//método splice - (i,n) remove n elementos à partir da posição i do array
const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]
//índices (i)    0    1    2    3    4    5    6     7
letras.splice(2,1)
// letras = ["A", "B", "D", "E", "F", "G", "H"]
//indices(1)  0    1    2    3    4    5    6
 
letras.splice(3,2) // letras = ["A", "B", "D", "G", "H"]
console.log(letras)

//exercicio 4
const numeros2 = [1, 2, 3, 4, 5, 6]
console.log(numeros2.length)
numeros2.push(7)
console.log(numeros2)
numeros2.splice(3,2)
console.log(numeros2, numeros2.length)

const personagens = ["Alex", "Piper", "Taystee", "Tiffany", "Red"];
function quemSouEu(array) {
    const indiceAleatorio = Math.floor(Math.random()* array.length);
    
    return array[indiceAleatorio];
}
const personagemEscolhido = quemSouEu(personagens);
console.log("Você é:", personagemEscolhido);


