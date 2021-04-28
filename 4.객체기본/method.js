// 객체 리터럴에서 'this' 사용하기
// 함수 makeUser는 객체를 반환한다.
// 이 객체의 ref에 접근하면 어떤 결과가 발생하고, 그 이유는 뭘까

function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

console.log( user.ref.name ); // 결과가 어떻게 될까요?

// 에러가 발생하는 이유는 this 값을 설정할 때 객체 정의가 사용되지 않기 때문
// this 값은 호출 시점에 결정되기 때문에 위 함수내 this 는 undefined가 된다.

// 에러가 발생하지 않게 함수 선언
function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
};
let user = makeUser();
console.log(user.ref().name);
// user.ref()가 메서드가 되고 this는 .앞의 객체가 되서 에러가 발생하지 않는다.


// 계산기 만들기
let calculator = {
  read : function(){
    this.num1 = Number(prompt("첫번째 숫자 입력"));
    this.num2 = Number(prompt("두번째 숫자 입력"));
  },
  sum : function(){
    return this.num1 + this.num2;
  },

  mul : function(){
    return this.num1 * this.num2;
  }
}


// 체이닝
// 아래 코드를 메서드 호출 체이닝이 가득하도록 수정해라
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
    console.log( this.step );
  }
};

// 메서드를 호출할 때마다 객체 자신을 반환하게 하면 된다.
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
    console.log( this.step );
    return this;
  }
};

ladder.up().up().down().showStep();