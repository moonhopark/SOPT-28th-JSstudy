// 2012년 2월 20일, 오전 3시 12분을 나타내는 Date 객체를 만들어보세요(시간대는 로컬).
// 그리고 alert 함수를 이용해 생성한 객체를 출력하세요.

let d1 = new Date(2012, 2, 20, 3, 12);
console.log(d1);


// 날짜를 입력하면 ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’ 형식으로 요일을 보여주는 함수 getWeekDay(date)를 만들어보세요.
function getWeekDay(date){
  let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

  return days[date.getDay()];
}

let date = new Date(2021 ,4 ,7);
getWeekDay(date);


// 유럽국가의 달력은 월요일부터 시작합니다(월요일-1, 화요일-2, … 일요일-7). ‘유럽’ 기준 숫자를 반환해주는 함수 getLocalDay(date)를 만들어보세요.
function getLocalDay(date){
  let day = date.getDay();

  if (day == 0) {
    day = 7;
  }

  return day;
}

let date = new Date(2019, 10, 5);
console.log(getLocalDay(date));

// date를 기준으로 days일 전 '일'을 반환하는 함수 getDateAge(date, days)를 만들라
// 오늘이 20일이라면 getDateAgo(new Date(), 1)는 19를 출력.
// days가 365일 때도 제대로 동작해야 한다.
function getDateAgo(date, days){
  let dateCopy = new Date(date)
  
  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

let date = new Date(2015, 0, 2); // 2015년 1월 2일

console.log( getDateAgo(date, 1) ); // 1, (2015년 1월 1일)
console.log( getDateAgo(date, 2) ); // 31, (2014년 12월 31일)
console.log( getDateAgo(date, 365) ); // 2, (2014년 1월 2일)


// 특정 달의 마지막일을 반환하는 함수 getLastDayOfMonth(year, month)를 작성
function getLastDayOfMonth(year, month){
  let date = new Date(year, month+1, 0);
  return date.getDate();
}

console.log(getLastDayOfMonth(2012, 0));
console.log(getLastDayOfMonth(2012, 1));
console.log(getLastDayOfMonth(2013, 0));

// 오늘 하루가 시작된 이후 몇 초나 지났는지 반환하는 함수 getSecondsToday()를 작성
function getSecondsToday(){
  let now = new Date();

  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today; // 차이(ms)
  return Math.round(diff / 1000); // 초로 변환
}

console.log(getSecondsToday());


// 오늘 하루가 끝날 때까지 남은 초를 반환해주는 함수 getSecondsToTomorrow()
function getSecondsToday(){
  let now = new Date();

  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

  let diff = tomorrow - now;
  return Math.round(diff/1000);
}