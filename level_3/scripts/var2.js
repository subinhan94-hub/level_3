// var2.js
let box1;
let box2;
let box3;
let box4;
// 변수키워드 변수명;
console.log(box1, box2, box3, box4);
//객체.함수(실행할 데이터들);
// (위) 출력한 결과 undefined

box1 = 10;
console.log(box1, box2, box3, box4);
// 함수 실행 위치에 따라 결과가 다를 수 있다.

box4 = 40;
console.log(box1, box2, box3, box4);

box2 = box1+box4;
// 우->좌 읽는 순서
// box1과 box4 변수를 더해 box2 변수에 대입
console.log(box1, box2, box3, box4);

box3 = '자바스크립트'; // 숫자가 아닌 문자는 따옴표 필수
box4 = box2+box3; /* box4에 새로운 값이 대입되면서 기존 값은 자동 제거됨 */
console.log(box1, box2, box3, box4);
console.log('------------------------------------------');

let trash1 = '사과' ; //음식물
let trash2 = '종이' ; // 재활용
let trash3; // ? 정의 안 된 상태 
console.log(trash1, trash2, trash3);

trash3 = 1;
trash2 = trash2+trash3
console.log(trash1, trash2, trash3);

trash2 = null; //빈 데이터(값)을 변수에 대입
// undefined 데이터는 오류 상태로 null처럼 대입불가
console.log(trash1, trash2, trash3);

let typeResult; //결과 출력 목적 변수
typeResult = typeof(trash1);
//(위 풀이) trash1 변수의 데이터 타입을 확인하고 typeResut 변수에 대입

console.log(typeResult); //string(결과변수사용)
console.log(typeof(trash1)); //string(결과변수미사용)

typeResult = typeof(trash3);
console.log(typeResult); // number

let num = 1;
let str = '1';
typeResult = num+str;
console.log(typeResult);

const item1 = '호텔수건';
let item1_num = 1 ;
let item1_price = 5000;
let item1_total;

//호텔수건 1장의 가격은 5000원 입니다.
// item1_total = item1+item1_num+item1_price;
//호텔수건15000원
//NaN == Not a Number 숫자가 아니라 계산불가 오류
// 프로그래밍 중 오류 발생 시 반드시 변수부터 확인
item1_total = item1+item1_num+'장의 가격은'+item1_price+'원 입니다.';
console.log(item1_total);

//호텔수건 1장의 가격은 5000원 입니다.

item1_total = item1+(item1_num+1)+'장의 가격은'+item1_price*2+'원 입니다';
console.log(item1_total);
console.log('------------------------------------------');

//HTML 태그 조작 준비. input 태그 변수 생성
const frm1Num = document.querySelector('#frm1 #num'); //부모는 써도 되고 안 써도 됨
console.log(frm1Num);

//객체, 속성, 이벤트, 함수
// HTML 변수로 저장 했을 때 이 변수는? 객체
// 객체를 다루는 문법 종류 : 객체.속성; 객체.함수();
// 객체.속성; -> 객체의 속성을 읽는다
// 객체.속성 = 변경값; -> 객체의 속성을 변경한다
// frm1Num.value = 2;
// 숫자 2 데이터를 frm1Num객체의 value속성으로 대입한다.
// 함수 이름만 봐도 함수 목적이 구분되도록 이름 작성하기
// function 생성 함수명(){실행결과}
function numVal(){ //증가
    // frm1Num.value = 2;
    // frm1Num.value = frm1Num.value+1; //Hint 기존값에 1을 더해서 대입한다.
    console.log(typeof(frm1Num.value));
    // frm1Num.value+1 실행 시 1+1 = 11 나오는 오류 원인 찾기
    // typeof(frm1Num.value) 함수실행 시 string 문자로 인식하는 원인발견
    // string문자열을 number숫자로 변경해야 오류 해결할 수 있음
    frm1Num.value = Number(frm1Num.value)+1
    // 대입연산자가 있을 땐 우측부터 먼저 해석하기, 우측에 함수 괄호가 있다면 괄호부터 먼저 해석
    // frm1Num.value를 Number()함수로 숫자로 변환하고 +1을 해서 대입한다.

}
// - 버튼을 클릭하면 input 값이 0으로 변경하기

function numValm(){ //감소
    frm1Num.value = Number(frm1Num.value)-1;
    // -,*,/ 더하기를 제외한 산술연산자는 문자데이터를 강제로 숫자로 변환해서 계산한다.
    // "1" +1 = 11 // 문자 "1"을 숫자 1과 연결해서 11
    // 1+1 = 2
    // "1"-1 = 0 // 빼기 연산을 만나 강제로 문자 "1"을 숫자 1로 변환해서 계산
    //1-1 = 0
}

// 에어비앤비 게스트추가 스크립트
// 동적목표 토대로 제어하고 싶은 HTML 들을 모두 변수로 만들기
// 총 게스트 인원 수(totalGuest), 성인 수(adultNum), 어린이 수(dhildNum) = HTML 3개
// 위 3개 변수 생성하고 콘솔로 출력 검사하기
const totalGuest = document.querySelector('.total_guest em');
const adultNum = document.querySelector('.adult_num');
const childNum = document.querySelector('.child_num');
console.log(totalGuest, adultNum, childNum);

// input 태그의 value값 변경 -> input.vlaue =변경 값;
// input 태그 외 태그의 값 변경 -> textContent 속성 활용
// 성인 수 변수의 값을 2로 변경

adultNum.textContent = 2;
console.log(typeof(adultNum.textContent));
// 함수 활용 성인, 어린이 +,- 버튼 클릭 시 성인 수, 어린이 수를 증가/감소 하는 함수 제작
//성인 버튼 클릭 시 증가 감소
function adultNumP(){
    adultNum.textContent = Number(adultNum.textContent)+1;
    totalFunc();
    //totalGuest.textContent = //총 게스트 수의 내용 위치에 대입하겠다
    // adultNum.textContent+childNum.textContent // 어른span태그의 내용 + 어린이 태그의 내용
    // 위 태그의 내용이 기본 문자로 처리함 어린이 "1" + 성인 "1" = "11" 문자계산오류
    // 위 문제 해결을 위해 Nunber() 함수 사용해서 다시 계산
    // Number(adultNum.textContent) + Number(childNum.textContent) // 1+1 = 2
    // 전체해석) 성인의 내용과 어린이 내용을 더하고 '명'을 연결해서 총 게스트 내용에 대입한다.
}
function adultNumM(){
    adultNum.textContent=adultNum.textContent-1;
    totalFunc();
}
//어린소 버튼 클릭 시 증가 감소
function childNumP(){
    childNum.textContent=Number(childNum.textContent)+1;
    totalFunc();
}
function childNumM(){
    childNum.textContent=childNum.textContent-1;
    totalFunc();
}
//총 게스트 수 변경하는 반복 함수
function totalFunc() {
    totalGuest.textContent=(Number(childNum.textContent))+Number(adultNum.textContent)+'명';
}


