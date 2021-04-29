// 수를 입력받아 덧셈
// 사용자에게 두 수를 입력받고, 두 수의 합을 출력해주는거 작성

let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

console.log( a + b );

// 사용자가 유효한 숫자형 값을 입력할 때까지 계속 입력받는 함수
function readNumber() {
  let num;

  do {
    num = prompt("숫자를 입력해주세요");
  } while ( !isFinite(num) );
  
  if ( num === null || num === '') return null;

  return +num;
}

console.log(`Read: ${readNumber()}`);

// A random number from min to max
function random(min, max) {
  return min + Math.random() * (max-min);
}
console.log(random(1, 5));

// A random integer from min to max
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)  + min);
}

console.log(randomInteger(1,5));