// Find the maximum
var n1='';
n1=prompt('primer numero');
var n2="";
n2=prompt('segundo numero');
function maxOfTwoNumbers(n1, n2) {
 if(n1>=n2) {
   return(n1);
 } else {
   return(n2);
 }
}

var largest = maxOfTwoNumbers(n1,n2);
console.log(largest);



// Finding Longest Word
var palabras = ["mystery","brother","aviator","crocodile","pearl","orchard","crackpot"];

var i=0;
var larga = "";

function findLongestWord(palabras) {
 for(var i=0;i<palabras.length;i++){
   if(palabras[i].length>larga.length) {
     larga = palabras[i];
     i++;
   } else {
   }
 }
 return(larga);
}

var longest = findLongestWord(palabras);
console.log(longest);





// Calculating a Sum
var numeros = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumArray(numeros){
 var suma = 0;
 for( var i=0; i<numeros.length;i++) {
   suma=suma+numeros[i];

 }
 return(suma);
}
var total = sumArray(numeros);
console.log(total);





// Calculate the Average
var numeros = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(numeros){
 var suma = 0;
 var avarage;
 for(var i=0;i<numeros.length;i++) {
 suma=suma+numeros[i];
 }
 avarage = suma/i;
 return(avarage);
}
var porcentaje = averageNumbers(numeros);
console.log(porcentaje);






// Array of Strings
var array = ["seat","correspond","linen","motif","hole","smell","smart","chaos","fuel","palace"];

function averageWordLength(array){
 var tamañototal = 0;
 var lengthAvarage = 0;
 for(var i=0;i<array.length;i++) {
   tamañototal = tamañototal + array[i].length;
 }
 lengthAvarage = tamañototal/i;
 return(lengthAvarage);
}
var averageLength = averageWordLength(array);
console.log(averageLength);

// Unique Arrays
var repetidas = ["crab", "poison", "contagious", "simple", "bring", "sharp", "playground", "poison", "communion", "simple", "bring"];
function uniquifyArray(array){
 i=0;
 repe=[];
 while(i<repetidas.length) {
   no = repetidas[i];
   if(repe.indexOf(no)==-1){
     repe.push(no);
     i=i+1;
   } else {
     i=i+1;
   }
 }return(repe);
}
var uniqued = uniquifyArray(repetidas);
console.log(uniqued);

// Finding Elements
var arr  = ["machine","subset","trouble","starting","matter","eating","truth","disobedience"];

var imput="";
imput=prompt();

function doesWordExist(arr, imput) {
 var resta = arr.indexOf(imput);
 if(resta===-1) {
   return(false);
 } else {
   return(true);
 }
}
var respuesta = doesWordExist(arr, imput);
console.log(respuesta);

// Counting Repetion
var ARR = [  "machine","matter","subset","trouble","starting","matter","eating","matter","truth","disobedience","matter"];
var imput="";
imput=prompt();

function howManyTimes(ARR, imput) {
  i = 0;
  counter = 0;
 while(i<ARR.length) {
   if(ARR[i]==imput) {
     counter=counter+1;
     i++;
   } else {
     i++;
   }
 } return(counter);
}
var howManyMatter = howManyTimes(ARR, imput);
console.log(howManyMatter);

// Bonus Quest
function greatestProduct (matrix) {

}
//con esto si que no puedo, pero no tardaré en ponerme al nivel!!!!
var matrix = [
  [08,02,22,97,38,15,0,40,0,75,04,05,07,78,52,12,50,77,91,08],
  [49,49,99,40,17,81,18,57,60,87,17,40,98,43,69,48,04,56,62,0],
  [81,49,31,73,55,79,14,29,93,71,40,67,53,88,30,03,49,13,36,65],
  [52,70,95,23,04,60,11,42,69,24,68,56,01,32,56,71,37,02,36,91],
  [22,31,16,71,51,67,63,89,41,92,36,54,22,40,40,28,66,33,13,80],
  [24,47,32,60,99,03,45,02,44,75,33,53,78,36,84,20,35,17,12,50],
  [32,98,81,28,64,23,67,10,26,38,40,67,59,54,70,66,18,38,64,70],
  [67,26,20,68,02,62,12,20,95,63,94,39,63,08,40,91,66,49,94,21],
  [24,55,58,05,66,73,99,26,97,17,78,78,96,83,14,88,34,89,63,72],
  [21,36,23,09,75,0,76,44,20,45,35,14,0,61,33,97,34,31,33,95],
  [78,17,53,28,22,75,31,67,15,94,03,80,04,62,16,14,09,53,56,92],
  [16,39,05,42,96,35,31,47,55,58,88,24,0,17,54,24,36,29,85,57],
  [86,56,0,48,35,71,89,07,05,44,44,37,44,60,21,58,51,54,17,58],
  [19,80,81,68,05,94,47,69,28,73,92,13,86,52,17,77,04,89,55,40],
  [04,52,08,83,97,35,99,16,07,97,57,32,16,26,26,79,33,27,98,66],
  [88,36,68,87,57,62,20,72,03,46,33,67,46,55,12,32,63,93,53,69],
  [04,42,16,73,38,25,39,11,24,94,72,18,08,46,29,32,40,62,76,36],
  [20,69,36,41,72,30,23,88,34,62,99,69,82,67,59,85,74,04,36,16],
  [20,73,35,29,78,31,90,01,74,31,49,71,48,86,81,16,23,57,05,54],
  [01,70,54,71,83,51,54,69,16,92,33,48,61,43,52,01,89,19,67,48],
];

var maxProduct = greatestProduct(matrix);
console.log(maxProduct);
