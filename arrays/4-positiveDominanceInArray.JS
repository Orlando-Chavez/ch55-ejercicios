/*---------------Positive dominance in Array---------------

Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
 
Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
*/

function positiveDom(numeros) {
  let positivos = 0;
  let noPositivos = 0;

  for (let numero of numeros) {
    if (numero > 0) {
      positivos++;
    } else {
      noPositivos++;
    }
  }
  return positivos > noPositivos;
}

console.log(positiveDom([-1, -3, -5, 4, 6767])); 
console.log(positiveDom([-2, -3, 5, 6, 7]));   
console.log(positiveDom([0, 1, 2]));         
console.log(positiveDom([0, -1, -2])); 


