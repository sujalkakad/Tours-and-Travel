
// var array = []

var storedArray = localStorage.getItem('array');
   var array = storedArray ? JSON.parse(storedArray) : [];


// function append(input) {
  
//   array.push(input);
//   localStorage.setItem('array', JSON.stringify(array1));
// }
// console.log(array)
