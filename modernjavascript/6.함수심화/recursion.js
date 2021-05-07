// 숫자 1 + 2 + ... + n을 계산하는 함수 sumTo (n)을 만들어보세요.
// 1. for 반복문 사용하기
// 2. 재귀 사용하기(n > 1일 때 sumTo(n) = n + sumTo(n-1))
// 3. 등차수열 공식 사용하기

// 1
function sumTo(n) {
  let sum =0;
  for (let i =1; i<=n; i++) {
    sum += i;
  }
  return sum;
};
console.log(sumTo(100));

// 2
function sumTo(n){
  if(n==1) return 1;
  return n + sumTo(n-1);
};
console.log(sumTo(100));

// 3
function sumTo(n) {
  return n*(n*1)/2
}
console.log(sumTo)


// 팩토리얼 계산하기
function factorial(n){
  if (n==1) return 1;
  return n*factorial(n-1)
}
factorial(5);


// 피보나치수 계산하기
// 재귀
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log( fib(3) ); // 2
console.log( fib(7) ); // 13
// fib(77); // 연산에 너무 많은 시간이 걸립니다!


// 반복문
function fib(n) {
  let a = 1;
  let b = 1;
  for (let i =3; i<=n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}


// 단일 연결 리스트 내 항목을 하나씩 출력

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// 반복문
function printList(list){
  let tmp = list;
  
  while(tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}

printList(list);

// 재귀를 이용한 방법
function printList(list){
  console.log(list.value);

  if(list.next){
    printList(list.next);
  }
}

printList(list);


// 위 리스트를 역순으로 출력하기
// 반복문 이용 방법
function printReverseList(list){
  let arr = [];
  let tmp = list;

  while(tmp){
    arr.push(tmp.value);
    tmp=tmp.next;
  }

  for(let i = arr.length-1; i>=0; i--){
    console.log(arr[i]);
  }
}

printReverseList(list);

// 재귀 이용 방법
function printReverseList(list){
  if(list.next) {
    printReverseList(list.next);
  }

  console.log(list.value);
}

printReverseList(list);