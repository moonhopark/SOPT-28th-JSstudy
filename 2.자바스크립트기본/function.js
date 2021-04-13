// '?' '||'를 사용하여 함수 다시 작성
function checkAge(age) {
  if ( age > 18 ) {
    return true;
  } else {
    return confirm('보호자의 동의를 받으셨나요?');
  }
}

function checkAge(age) {
  return ( age > 18 ) ? true : confirm("보호자의 동의를 받으셨나요?");
}

function checkAge(age) {
  result = ( age > 18 ) || confirm("보호자의 동의를 받으셨나요?");
  return result
}

// min(a,b) 함수 만들기
function min(a,b) {
  return (a < b) ? a : b
}

// pow(x,n) 함수 만들기
function pow(x,n) {
  return x**n
}

let x = prompt("x?");
let n = prompt("n?");

if ( n < 1 ) {
  alert("자연수를 입력하세요")
} else {
  alert( pow(x,n));
}


// 화살표 함수로 변경하기
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "동의하십니까?",
  function() { alert("동의하셨습니다."); },
  function() { alert("취소 버튼을 누르셨습니다."); }
);

ask = (question, yes, no) => {
  if (confirm(question)) yes()
  else no();
}
ask(
  "동의하십니까?",
  () => {alert("동의하셨습니다.");},
  () => {alert("취소 버튼을 누르셨습니다.");}
);