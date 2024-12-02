// for (i = 2; i <= 100; i++) {
//   let primenumber = true;
//   for (let j = 2; j < i; j++) //      this loop going to execute
//   // the code inside it until   i   is not < i which will never heppen
//   // so the only situation when this loop will stop is when the
//   // parant loop stop, that will happen only when i >=100
//   {
//     if (i % j == 0) {
//       primenumber = false;
//       break;
//     }
//   }
//   if (primenumber == true) {
//     console.log(i + "  is prime number");
//   }
// }
// *******************************************************************************************************

let Random_number = 509;
let next_number = Random_number + 1;

while (true) {
  let myprime_number = true;
  for (let i = 2; i <= Random_number; i++) {
    //this loop will take all of numbers from 2 to random number and divise next number by them,
    if (next_number % i == 0) {
      //if one on those numbers is a divisor of the next number of my random number that means that the next_number is not a prime number;
      myprime_number = false; // and my prime number will take the value "false"
    }
  }
  if (myprime_number == true) {
    console.log(
      "The next prime number after " + Random_number + " is " + next_number
    );
    break;
  }

  next_number++;
}
