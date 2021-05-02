// "my-short-string"같이 여러 단어를 대시(-)로 구분한 문자열을 카멜 표기법을 사용한 문자열 "myShortString"로 변경해주는 함수를 작성해보세요.
// 대시는 모두 지우고 각 단어의 첫 번째 글자는 대문자로 써주면 됩니다.

function camelize(str){
  str = str.split('-');
  str = str.map(
    (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
  )
  return str.join('');
}

camelize("background-color")
camelize("-webkit-transition")

// 배열 arr의 요소 중 a이상 b 이하 범위에 속하는 요소만 골라 새로운 배열에 집어넣고, 해당 요소를 출력해주는 함수 filterRange(arr, a, b)를 작성해봅시다.
// 새로 작성하는 함수는 기존 배열 arr을 변경하면 안 되고, 반환되는 함수는 새로운 배열이어야 합니다.
function filterRange(arr, a, b){
  return arr.filter(item => (a <= item && item <= b));
};

let arr = [5,3,8,1];
let filtered = filterRange(arr, 1, 4)
console.log(filtered)
console.log(arr)

// 배열 arr의 요소 중 a와 b 사이에 속하지 않는 요소는 삭제해주는 함수 filterRangeInPlace(arr, a, b)를 작성해보세요. 
// 배열의 모든 요소(i)는 다음 조건을 만족해야 합니다. a ≤ arr[i] ≤ b
// 작성한 함수는 기존 배열을 변경하기만 하고 아무것도 반환하지 않아야 합니다.
function filterRangeInPlace(arr, a, b){
  for (let i =0; i < arr.length; i++){
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [5,3,8,1];
filterRangeInPlace(arr, 1, 4);
console.log(arr);


// 내림차순으로 정렬하기
let arr = [5,2,1,-10, 8];
arr.sort((a, b) => b - a);

console.log(arr);


// 문자열이 담긴 배열 arr을 복사한 다음 해당 배열을 정렬해봅시다. 단 이때 arr은 변경되면 안 됩니다.
// 함수 copySorted(arr)는 복사 후 정렬된 배열을 반환해야 합니다.
function copySorted(arr){
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log(sorted);
console.log(arr);


// 확장 가능한 계산기
// 첫 번째 단계는 "1 + 2"와 같은 문자열을 받아서 “숫자 연산자 숫자” 형태(공백으로 구분)로 바꿔주는 메서드 calculate(str)를 구현하는 것입니다. 
// 이 함수는 +와 -를 처리할 수 있어야 하고, 연산 결과를 반환해야 합니다.

// 두 번째 단계는 계산기가 새로운 연산을 학습할 수 있도록 해주는 메서드 addMethod(name, func)를 추가해 주는 것입니다. 
// 연산자 이름을 나타내는 name과 인수가 두개인 익명 함수 func(a,b)를 받는 새 메서드를 구현해야 하죠.

function Calculator(){
  this.methods = {
    "-": (a,b) => a - b,
    "+": (a,b) => a + b,
  };

  this.calculate = function(str) {
    let split = str.split(' '),
    a = +split[0],
    op = split[1],
    b = +split[2];

    if (!this.methos[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a,b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}


// name을 나타내는 프로퍼티를 가진 객체 user가 담긴 배열이 있다. name의 값만 담은 새로운 배열을 만들어주는 코드 작성
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

console.log(names);


// 세 개의 프로퍼티 name과 surname, id를 가진 객체 user가 담긴 배열이 있습니다.
// name과 surname을 조합해 fullName을 만들고, 이를 이용해 두 개의 프로퍼티 id와 fullName을 가진 객체를 담은 새로운 배열을 반환해주는 코드를 작성해보세요.

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.name
}));

console.log(usersMapped)


// 프로퍼티 age가 있는 객체가 담긴 배열이 있다. 이 배열을 age를 기준으로 정렬해주는 함수 sortByAge(users)를 작성
function sortByAge(arr){
  arr.sort((a,b) => a.age - b.age);
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

sortByAge(arr);
console.log(arr)


// age를 나타내는 프로퍼티를 가진 객체가 여러 개 담긴 배열이 있다. 평균 나이를 구해주는 함수 getAverageAge(users)를 작성
function getAverageAge(users){
  return users.reduce((prev, users) => prev + users.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

console.log( getAverageAge(arr) );


// arr은 배열인데 배열 내 유일한 요소를 찾아주는 함수 unique(arr)를 작성
function unique(arr){
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings));