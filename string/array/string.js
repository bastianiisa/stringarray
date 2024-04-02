//concatenação

const palavra = 'Isa'
const palavra2 = 'bela'

console.log(palavra + palavra2)

const nome = 'Isabela'
const idade = 19
//console.log('Meu nome é ' + nome + ' eu tenho ' + idade + ' anos.')
console.log(`Meu nome é ${nome}, eu tenho ${idade} anos.`) //template string

const meunome = 'Isabela'
const cor = 'rosa'

console.log('A cor favorita de ' +  meunome  + ' é ' +  cor + '.') 

console.log(`A cor favorita de ${meunome} é ${cor}.`) 

//propriedade length
const nomecompleto = "Isabela Abreu Bastiani" 
console.log(nomecompleto.length)

//metodo toLowerCase
const frase = "oI tUDo bEm"
const fraseminuscula = frase.toLowerCase()
console.log(fraseminuscula)

//metodo toUpperCase
const frase2 = "oI tUDo bEm"
const frasemaiuscula = frase.toUpperCase()

//metodo trim() - util em formularios como por ex de login
const email = "     belab2588@gmail.com      "
console.log(email.trim())

//metodo includes
const frase3 = "Hoje comi chocolate"
frase.includes("chocolate") //true
frase.includes("arroz") //false
console.log(frase.includes('arroz'))

//metodo replaceAll
const frase4 = "Eu amo cachorros, tenho vários cachorros"
const novaFrase = frase4.replaceAll("cachorro", "gato")
console.log (frase4.replaceAll("cachorro", "gato"))

const frase5 = "Meu nome é Isabela e tenho um gato chamado Kaminari"
const frase5maiuscula = frase5.toUpperCase()
console.log(frase5maiuscula)

console.log(frase5.replaceAll("a", "i"))

console.log(frase5.length)





