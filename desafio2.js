const fruits = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
// função para enconreae o índice de 'abacaxi' no array
function findAbacaxiIndex(array) {
    let index; //inicializa o indice (caso 'abacaxi' nao seja encontrado) // função de callback para o método filter, que recebe cada elemento do array e seu indice
    function findAbacaxi(fruit,i) {
        if (fruit=== "Abacaxi") {
            index = i; //atribui o indice atual se a fruta for 'abacaxi'
            return true; // retorna true para interromper a execução do filter
        }
    }
    array.filter(findAbacaxi);
    //retorna o indice encontrado
    return index;
}

//chama a função para encontrar o indice da palavra 'abacaxi'
const abacaxiIndex = findAbacaxiIndex(fruits);
 
//imprime o indice encontrado e o tamanho do array de frutas
console.log("Indice de 'Abacaxi': ", abacaxiIndex);
console.log("Tamanho do array:", fruits.length );
