// 함수 두 개로 동일한 객체 만들기
// new A()==new B()가 성립 가능한 함수 A와 B를 만드는 게 가능할까요?

// 두 함수 모두 this 대신에 객체를 반환하게 하면 된다.
let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true


// 계산기 만들기
function Calculator(){
  this.sum = function() {
    return this.num1 + this.num2;
  }

  this.mul = function() {
    return this.num1 * this.num2;
  }

  this.read = function(){
    this.num1 = Number(prompt("첫번째 숫자 입력"));
    this.num2 = Number(prompt("두번째 숫자 입력"));
  }
}

let calculator = new Calculator();
calculator.read();
calculator.sum();
calculator.mul();


// 누산기 만들기
function Accumulator(num){
  this.value =  Number(num);

  this.read = function(){
    this.a = Number(prompt("숫자 입력"));
    this.value += this.a
  };
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

console.log(accumulator.value);