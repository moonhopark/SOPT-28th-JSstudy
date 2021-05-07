// name 프로퍼티의 값을 변수 name에 할당하세요.
// years 프로퍼티의 값을 변수 age에 할당하세요.
// isAdmin 프로퍼티의 값을 변수 isAdmin에 할당하세요. isAdmin이라는 프로퍼티가 없으면 false를 할당하세요.

let user = {
  name: "John",
  years: 30
};

let {name , years: age , isAdmin=false} = user;
console.log(name);
console.log(age);
console.log(isAdmin);


// 가장 많은 급여를 받는 사람의 이름을 반환해주는 함수 topSalary(salaries)를 만들자.
// salaries가 비어있으면 null 반환
// 최대 급여를 받는 사람이 여러명이면 그 중 아무나 한명 반환
function topSalary(salaries) {
  let max = 0;
  let maxName = null;

  for(const [name, salary] of Object.entries(salaries)){
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }
  
  return maxName;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

topSalary(salaries);