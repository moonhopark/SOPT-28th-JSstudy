// 급여 정보가 저장되어있는 객체 salaries가 있습니다.
// Object.values 와 for..of 반복문을 사용해 모든 급여의 합을 반환하는 함수 sumSalaries(salaries)를 만들어보세요.
// salaries가 빈 객체라면, 0이 반환되어야 합니다

function sumSalaries(salaries){
  let sum = 0;
  for( value of Object.values(salaries)){
    sum += value;
  }
  return sum
};

let salaries = {
  "John" : 100,
  "Pete" : 300,
  "Mary" : 250
}

console.log(sumSalaries(salaries));


// 객체 프로퍼티 개수를 반환하는 함수 count(obj)를 작성
function count(obj){
  return Object.keys(obj).length;
};

let user = {
  name: 'John',
  age: 30
};

console.log( count(user) );