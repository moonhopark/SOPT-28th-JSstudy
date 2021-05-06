alert( null || 2 || undefined );
// 2

alert( alert(1) || 2 || alert(3) );
// alert 창에 1, 2가 차례대로 출력된다.
// alert 메서드는 undefined를 반환하기 때문에 OR 연산자가 다음 피연산자를 평가한다.

alert( 1 && null && 2);
// null

alert( alert(1) && alert(2) );
// 1, undefined가 반환

alert( null || 2 && 3 || 4);
// 3이 출력
// AND 연산자가 || 보다 먼저 실행된다.
// null || 3 || 4 가 되고 첫 번째 truthy인 3이 출력

// 사이 범위 확인
if (age >= 14 || age <= 90)

// 바깥 범위 확인
if ( age < 14 || age > 90)

if ( !(age >= 14 && age <= 90))

// if에 관한 고찰
if (-1 || 0) alert( 'first' );          // 실행
if (-1 && 0) alert( 'second' );         // 실행 안됨
if (null || -1 && 1) alert( 'third' );  // 실행



// 로그인 창 구현하기
let user = prompt("사용자 이름을 입력해주세요.");

if(user == "Admin") {
  let password = prompt("비밀번호 : ")
  if (password == "TheMaster") {
    alert('환영합니다')
  } else if ((password == '') || (password == null)) {
    alert('취소되었습니다.')
  } else {
    alert('잘못된 비밀번호입니다.')
  }
} else if (user=='' || user==null) {
  alert('취소되었습니다.')
} else {
  alert('인증되지 않은 사용자입니다.')
}