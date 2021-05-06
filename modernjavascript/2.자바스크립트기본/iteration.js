// 반복문의 마지막 값
let i = 3;

while (i) {
  alert( i-- );
};
// 1

// while 반복문의 출력값 예상하기
// 전위형 증가 연산자를 사용한 경우(++i);
let i =0;
while (++i < 5) alert( i );
// 1 2 3 4

// 후위형 증가 연산자를 사용한 경우(i++);
let i =0;
while (i++ < 5) alert( i );
//  1 2 3 4 5


// for 반복문의 출력값 예상하기
// 후위형 증가 연산자를 사용한 경우
for (let i =0; i<5; i++) alert(i);
// 0 1 2 3 4

// 전위형 증가 연산자를 사용한 겨우
for(let i =0; i<5; ++i) alert(i);


// for 반복문을 이용하여 짝수 출력하기
for(let i=2; i<11; i= i+2) alert(i)

for(let i=1; i<11; i++) {
  if(i%2==0) alert(i)
}


// for 반복문을 while 반복문으로 바꾸기
for (let i=0; i<3; i++) {
  alert( `number ${i}!`);
}

let i=0;
while(i<3) {
  alert( `number ${i}!`);
  i++
}


// 사용자가 유효한 값을 입력할 때까지 프롬프트 창 띄우기
// 내가 한거
let num;
num = prompt("100을 초과하는 숫자를 입력해주세요.");
while(num <= 100 && num ){
  num = prompt("100을 초과하는 숫자를 입력해주세요.", 0);
};

// 해답
let num;
do {
  num = prompt("100을 초과하는 숫자를 입력해주세요.", 0)
} while(num<=100 && num);


// 소수 출력하기
let num = prompt("숫자를 입력하세요");

nextPrime:
for(let i=2; i<=num; i++) {
  for(let j=2; j<i; j++) {
    if(i % j ==0) continue nextPrime;
  }  
  alert(i)
}