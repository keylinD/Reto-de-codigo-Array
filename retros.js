//Reto 1! 
//Escriba una función 'computeAverageLengthOfWords' que recibe dos strings y devuelve el promedio de la longitud de ambos strings.


let computeAverageLengthOfWords =(word1, word2)=> {

  return (word1.length + word2.length)/2
}
 computeAverageLengthOfWords("A","KAMNJHS");//Regresa 4
 computeAverageLengthOfWords("LALALALALA","KEKEKEKEKEKEKE");//Regresa 12
 computeAverageLengthOfWords("KEMAL","KEMAL");//Regresa 5
module.exports = computeAverageLengthOfWords;


// 2 !!
//Escriba una función llamada getNthElement.
//Dado un arreglo y un entero, getNthElement devuelve el valor según el entero dado, dentro del arreglo dado.
//Notas:
//Si el arreglo tiene una longitud de 0, debería devolver' undefined'.
 
let getNthElement=(array,n) =>{
return array[n];
}
getNthElement([])//Array vacio //Regresa undefined 
getNthElement([1,2,3,4,5,6,100,7,9],1);//Regresa 2
 
module.exports = getNthElement;
//--------------------------------------------------------------------------------------------------

//4!
//Escribe una función llamada areValidCredentials.
//Dando un nombre y una contraseña, areValidCredentials, devuelve true si el nombre es superior a 3 caracteres, Y, la contraseña tiene al menos 8 caracteres de longitud. De lo contrario, devuelve false.

let areValidCredentials = (name,password) =>{
  if(name.length >3 && password.length >=8){
    const text = true;
    return text;
  }else{
    const text = false;
    return text;
  }
};
areValidCredentials('Ritu', 'mylongpassword');// De vuelve true
areValidCredentials('key','mylong');// de vuelve false

//--------------------------------------------------------------------------------------------------
// 
//Escribe una función llamada convertScoreToGrade.
//Dada una puntuación, convertScoreToGrade devuelve una cadena que representa el grado de letra correspondiente a la puntuación dada.

const convertScoreToGrade = (score >100 < 0) =>{
  if(score ){
    const text = true;
    return text;
  }else{
    const text = false;
    return text;
  }
};