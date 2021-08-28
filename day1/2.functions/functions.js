/*
 * Create the function factorial here
 */
 
function factorial(n) {
    if (n>=1 && n<=10) {
    const numbers = [];
    for (let i=1; i<n+1; i++){
        numbers.push(i)
    }
    let factorial = numbers.reduce(myFactorial);
    function myFactorial(product, value){
        return product * value;
    }
    return factorial
    }
}