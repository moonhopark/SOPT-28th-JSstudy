// 첫 글자를 대문자로 변경하기
function unFirst(str) {
  if (!str) return str; // 문자열이 비어있을 경우 undefined가 되는 문제 해결

  return str[0].toUpperCase() + str.slice(1);
}

unFirst("john");

//str에 'viagra’나 'XXX’라는 문자열이 있으면 true를 반환해주는 함수 checkSpam(str)을 만들어보세요. 해당 문자열이 없으면 false를 반환하면 됩니다.
function checkSpam(str){
  let upperStr = str.toUpperCase();
  
  return upperStr.includes("VIAGRA") || upperStr.includes("XXX");
};

checkSpam('buy ViAgRA now')
checkSpam('free xxxxx')
checkSpam("innocent rabbit")

// str의 길이를 확인하고, 최대 길이 maxlength를 초과하는 경우 str의 끝을 생략 부호 ("…")로 
// 대체해주는 함수 truncate(str, maxlength)를 만들어봅시다. 새로 만든 문자열의 길이는 maxlength가 되어야 합니다.
function truncate(str, maxlength){
  if (str.length > maxlength){
    return str.slice(0, maxlength - 1) + '…';
  }
  return str
}

truncate("What I'd like to tell on this topic is:", 20)
truncate("Hi everyone!", 20)


// 달러 표시가 먼저 나오고 그 뒤에 숫자가 나오는 문자열 "$120"가 있다고 가정해 봅시다.
//위와 같은 문자열에서 숫자만 뽑아내는 함수 extractCurrencyValue(str)를 작성해 봅시다.
function extractCurrencyValue(str){
  return +str.slice(1);
}

console.log('$120')