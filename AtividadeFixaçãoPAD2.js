///1. Crie uma função que retorna a string “Olá” concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação “!” no final.

function questao1(text){
  return `Olá + ${text} + '!';`
 }
 
///2. Crie uma função que dado dois valores e uma Callback (passados como parâmetros), mostre no console a soma, subtração, multiplicação e divisão desses valores, dependendo da função Callabck.
 
 function questao2(valor1, valor2, callback) {
  console.log(callback(valor1, valor2))
 }
 
 questao2(10, 10, function(a, b) {
   return a * b;
 });
 
///3. Crie uma função que recebe um parâmetro e uma callback que retorna uma outra função que recebe um parâmetro e chama essa callback que verifica se um número inteiro passado na primeira função como parâmetro é divisível por um outro numero passado pela função interna e retorne true ou false.

function questao3(valor1, callabck) {
  return function valor(valor2) {
    callabck(valor1, valor2);

    if(valor1 % valor2 == 0){
      return true;
    }
    
    else{
      return false;
   }
  };
}

///4. Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por exemplo, se a entrada for 2, a função deverá retornar “fevereiro”, pois este é o 2° mês.
 
function questao4(meses){
     switch(meses){

       case 1:
         return "janeiro";
         break;
   
       case 2:
         return "fevereiro";
       break;
   
       case 3:
         return "março";
       break;
     }
   }
 
 ///5. Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo dependendo da função Callback.
 
 function questao5 (y1, y2, callback){
     console.log(callback(y1, y2));
   }
   questao5(18, 9, function(valory1, valory2){
     if(valory1 > valory2){
       return `${valory1} é maior que ${valory2}.`
     }
 
     else{
       return `${valory2} é maior que ${valory1}.`
     }
   })