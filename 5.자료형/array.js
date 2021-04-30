// 배열은 복사가 되는가?
let fruits = ["사과", "배", "오렌지"];

// 배열을 '복사'한 후, push 메서드를 이용해 새로운 값을 추가합니다.
let shoppingCart = fruits;
shoppingCart.push("바나나");

// fruits에 어떤 값이 들어 있을까요?
alert( fruits.length );

// 4
// 배열은 객체라서 참조를 통한 복사를 한다.


// 배열과 관련된 연산
styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[1] = "Classics";
styles.shift();
styles.unshift("Rap", "Reggae");


// 배열 컨텍스트에서 함수 호출

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // ?

// a, b, function(){...}
// arr[2](); 는 this를 받고 배열을 그대로 출력한다.


//아래 조건을 만족하는 함수 sumInput()을 작성해 봅시다.
// prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 입력받은 값들을 배열에 저장합니다.
// 숫자가 아닌 값, 혹은 빈 문자열을 입력하거나 ‘Cancel’ 버튼을 누르면 질문을 멈춥니다.
// 배열 요소의 합을 계산하고 리턴합니다.
function sumInput(){
  do {
    num = prompt("숫자를 입력하세요");
    let arr = [];
    arr.push(num);
  } while( num !== "" || num !== null || isFiniteValue(num) );

  let sum = 0;
  for( let number of numbers ){
    sum += number;
  }
  return sum;
}
console.log( sumInput() );


// 입력값은 arr = [1, -2, 3, 4, -9, 6] 같이 숫자로만 구성된 배열이라고 가정해봅시다.
// 우리가 해야 할 일은 인접한 요소의 총합이 최대인 arr의 부분 배열을 찾는 것입니다.
// 부분 배열 요소들의 합을 리턴하는 함수 getMaxSubSum(arr)를 작성해 봅시다.

// 느린 해답
function getMaxSubSum(arr) {
  let maxSum = 0; // 어떤 요소도 선택하지 않으면 0을 반환합니다.

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}

// 느린 해답
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // 배열의 각 요소를
    partialSum += item; // partialSum에 더합니다.
    maxSum = Math.max(maxSum, partialSum); // 최대값을 기억해 놓습니다.
    if (partialSum < 0) partialSum = 0; // 음수가 되면 0을 대입합니다.
  }

  return maxSum;
}