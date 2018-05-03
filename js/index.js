// version 1 
// let fib1 = 1;
// let fib2 = 1;
// let fib3;

// let n = parseFloat(prompt('Enter a number'));

// function fibo(a) {
//     for(let i = 3; i <= n; i++) {
//         fib3 = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = fib3;
//         }
//     return fib3;
// }
// document.write(fibo(n));


// version 2
// let fiboNumbers = [1, 1];
// let n = parseFloat(prompt('Enter a number'));
// function fibo(a) {
//     for(let i = 2; i <= n; i++) {
//         fiboNumbers.push(fiboNumbers[i-1]+fiboNumbers[i-2]);
//         }
//         return fiboNumbers[n-1];
// }
// document.write(fibo(n));

// version 3
let n = parseFloat(prompt('Enter a number'));
function fibo(n) {
    if (n <= 1) {
        return n;
    } return fibo(n-1) + fibo(n-2);
}
document.write(fibo(n));


