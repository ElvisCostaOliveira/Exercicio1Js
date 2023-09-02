// 1) Registro de idade no console: Sua tarefa é usar a função console.log()
// para imprimir a sua idade no console do navegador. console.log() é
// uma função do JavaScript usada para imprimir a saída em um
// console, geralmente útil para depuração. Consulte a documentação

// oficial para mais detalhes: https://developer.mozilla.org/pt-
// BR/docs/Web/API/Console/log

var idade = 34;

console.log("Eu tenho " + idade + " idade");



// 2) Registrar o número de semanas de programação: Agora, registre o
// número de semanas que você programou usando a mesma função
// console.log().

var mes = 4;

console.log("A quantidade de semana que programei em java foi: " + mes + 6 + " semanas");



// 3) Usando comentários: Comentários são anotações que você pode
// adicionar ao seu código que não são executadas. Use um comentário
// de várias linhas (/* Comentário */) em seu código. Eles são úteis para
// explicar o que seu código faz. Consulte a documentação oficial sobre

// comentários: https://developer.mozilla.org/pt-
// BR/docs/Web/JavaScript/Guide/Grammar_and_types#coment%C3

// %A1rios.

/*
var comentario = "1";
var comentario = "2";
var comentario = "3";
var comentario = "4";
*/




// 4) Criando variáveis de diferentes tipos: JavaScript suporta vários tipos
// de dados, incluindo números (number), texto (string), objetos
// (object), etc. Sua tarefa é criar 5 variáveis de diferentes tipos de
// dados. Consulte a documentação oficial para mais informações sobre

// tipos de dados e variáveis: https://developer.mozilla.org/pt-
// BR/docs/Web/JavaScript/Data_structures.

var nome = "Elvis";
const idade = 34;
let peso = 98.8;
var trabalhaHoje = true;
let cores = ["preto", "branco"];



// 5) Adicionando 3.5 à sua idade: O JavaScript permite operações
// aritméticas como adição, subtração, etc. Adicione 3.5 à sua idade
// usando um operador de adição (+) e registre o resultado com
// console.log(). Veja mais sobre operadores aritméticos:

// https://developer.mozilla.org/pt-
// BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#opera

// dores_aritm%C3%A9ticos.

let minhaIdade = 34.0;
let idadeAdicional = 3.5;
let resultado = minhaIdade + idadeAdicional;

console.log("Minha idade adicionada é: " + resultado);


// 6) Quantos anos se passaram desde o pouso na lua em 1969: O objeto
// Date em JavaScript é usado para trabalhar com datas. Sua tarefa é
// obter o ano atual, subtrair 1969 dele e registrar o resultado. Consulte
// a documentação oficial para mais detalhes sobre o objeto Date:

// https://developer.mozilla.org/pt-
// BR/docs/Web/JavaScript/Reference/Global_Objects/Date.


let dataLua = new Date(1969)
let anoLua = dataLua.getFullYear()

let dataHoje = new Date()
let anoHoje = dataHoje.getFullYear()

 console.log(anoHoje - anoLua)




// 7) Divisão de números: Sua tarefa é dividir 65 por 240 e registrar o
// resultado usando console.log().

let numero1 = 65, numero2 = 240;

console.log(numero1 / numero2)


// 8) Multiplicação de números: Multiplique 0.2708 por 100 e registre o
// resultado. Esta é uma operação aritmética simples usando o
// operador de multiplicação (*).

let number1 = 0.2708, number2 = 100;

console.log(number1 * number2)


// 9) Concatenação de strings: Em JavaScript, você pode concatenar (unir)
// strings usando o operador de concatenação (+). Sua tarefa é
// concatenar as strings 'Hello' e 'World' e registrar o resultado. Veja

// mais sobre operações de string: https://developer.mozilla.org/pt-
// BR/docs/Web/JavaScript/Guide/Text_formatting_with_strings.

let name1 = "Hello", name2 = "World";

console.log(name1 + name2)


// 10) Concatenação de strings com espaço: Agora, concatene
// 'Hello' e 'World', mas certifique-se de incluir um espaço entre as duas
// palavras.

let name3 = "Hello", name4 = "World";

console.log(name3 +" e "+ name4)


// 11) Usando a propriedade length: Em JavaScript, a propriedade
// .length é usada para obter o número de caracteres em uma string.
// Sua tarefa é registrar o número de caracteres na string 'Teaching the
// world how to code' usando a propriedade .length. Veja mais sobre a

// propriedade .length: https://developer.mozilla.org/pt-
// BR/docs/Web/JavaScript/Reference/Global_Objects/String/length.

let frase = "Teaching the world how to code";

console.log(frase.length)



// 12) Usando o método toUpperCase(): Este método é usado para
// converter todas as letras de uma string para maiúsculas. Use o
// método .toUpperCase() para converter a string 'Kaian Novais' em
// maiúsculas e registre o resultado. Veja mais sobre o método

// .toUpperCase(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase.

let frase1 = "Kaian Novais";

console.log(frase1.toUpperCase(frase1))




// 13) Removendo espaços em branco: O método .trim() é usado
// para remover espaços em branco do início e do final de uma string.
// Sua tarefa é remover os espaços em branco no início e no final da
// string “ Professor Kaian Novais ” usando o método .trim(). Consulte a
// documentação oficial sobre o método .trim():

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim.


var frase3 = "   Professor Kaian Novais   ";

console.log(frase3.trim());



// 14) Gerando um número aleatório: A função Math.random() é
// usada para gerar um número aleatório entre 0 (inclusive) e 1
// (exclusive). Sua tarefa é gerar um número aleatório, multiplicá-lo por
// 100 e registrar o resultado. Veja mais sobre Math.random():

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random.

const NumberY = Math.random();

const num0ate100 = NumberY * 100;

console.log(num0ate100);


// 15) Encontrando o próximo inteiro maior: O método Math.ceil() é
// usado para arredondar um número para cima até o próximo número
// inteiro maior. Sua tarefa é usar Math.ceil() com o número 43.8 e
// registrar o resultado. Veja mais sobre Math.ceil():

// https://developer.mozilla.org/pt-
// BR/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil.


const numeroDecimal = 43.8;
const numeroArredondadoParaCima = Math.ceil(numeroDecimal);

console.log(numeroArredondadoParaCima);




// 16) Verificando se um número é um número inteiro: O método
// Number.isInteger() é usado para determinar se um valor é um
// número inteiro. Sua tarefa é verificar se o número 2017 é um número
// inteiro e registrar o resultado. Veja mais sobre Number.isInteger():

// https://developer.mozilla.org/pt-
// BR/docs/Web/JavaScript/Reference/Global_Objects/Number/isInte

// ger.
const numero = 2017;
const resultado2 = Number.isInteger(numero);

console.log(resultado2);
