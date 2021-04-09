// 전위형과 후위형
let a = 1, b = 1;

let c = ++a;
let d = b++;
// a=2, b=2, c=2, d=1

// 할당 후 결과 예측하기
let a = 2;

let x = 1 + (a *= 2);
// a=4, x=5

// 형 변환
"" + 1 + 0     // 10
"" - 1 + 0     // -1
true + false   // 1
6 / "3"        // 2
"2" * "3"      // 6
4 + 5 + "px"   // 9px
"$" + 4 + 5    // $45
"4" - 2        // 2
"4px" - 2      // NaN
7 / 0          // Infinity
"  -9  " + 5   // "  -9  5"
"  -9  " - 5   // -14
null + 1       // 1
undefined + 1  // NaN
" \t \n" - 2   // 0

// 덧셈 고치기
let a = prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
let b = prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);

alert(a + b); // 12

alert(Number(a) + Number(b)); // 3