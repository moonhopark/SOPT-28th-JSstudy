// 객체야 안녕
let user = {};

user.name = "John";
user.surname = "Smith";

user.name = "Pete";
delete user.name


// 객체가 비어있는지 확인하는 함수 만들기
// 객체에 프로퍼티가 하나도 없는 경우 true, 그렇지 않은 경우 false를 반환해주는 함수

function isEmpty(obj) {
  if(Object.keys(obj).length) {
    return true;
  } else {
    return false;
  }
}

let schedule = {};

console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));


// 변하지 않는 객체
// const와 함께 선언한 객체를 변경 가능한가

const user = {
  name: "John"
};
// 실행 잘된다.
user.name="Pete";
// 에러
user = 123;

// const는 객체의 내용(프로퍼티)을 변경하는 건 막지 않는다.


// 프로퍼티 합계 구하기
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for(let key in salaries) {
  sum = sum + salaries[key]
}
console.log(sum)


// 프로퍼티 값 두 배로 부풀리기
// 객체 obj의 프로퍼티 값이 숫자인 경우 그 값을 두배 해주는 함수

function multiplyNumeric(obj){
  for(let key in obj){
    if((typeof obj[key]) == "number") {
      obj[key] = obj[key] * 2
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);