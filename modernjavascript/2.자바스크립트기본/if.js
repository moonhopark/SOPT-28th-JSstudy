// if와 문자열 0
if ("0") {
  alert( 'Hello' );
}
// 실행 된다. 비어있는 문자열을 제외한 모든 문자열은 true를 반환한다.

//if ...else
let answer = prompt('자바스크립트의 "공식" 이름은 무엇일까요?');

if ( answer == "ECMAScript") {
  alert("정답입니다!")
} else {
  alert("모르겼나요? 정답은 ECMAScript입니다!")
}

// 입력받은 숫자의 부호 표시
let num = prompt("숫자를 입력하세요.")

if (num > 0) {
  alert(1)
} else if (num < 0) {
  alert(-1)
} else {
  alert(0)
}

// if를 ?로 교체하기
let result;

if (a + b < 4) {
  result = '미만';
} else {
  result = '이상';
}

let result = (a + b < 4) ? '미만' : '이상';


// if...else를 ?로 교체하기
let message;

if (login == '직원') {
  message = '안녕하세요.';
} else if (login == '임원') {
  message = '환영합니다.';
} else if (login == '') {
  message = '로그인이 필요합니다.';
} else {
  message = '';
}

let message = (login == '직원') ? '안녕하세요.' :
  (login == '임원') ? '환영합니다.' :
  (login == '') ? '로그인이 필요합니다.' :
  '';