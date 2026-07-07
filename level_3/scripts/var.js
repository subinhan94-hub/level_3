// var.js
// 변수와 함수
// 변수 키워드 변수명 대입 연산자 대입 값;
// 함수 생성 키워드 함수명(){실행결과;}
let user_name = '홍길동';
let user_pw = '1234';
function func1(){ // 생성과 준비
    console.log(user_name);
    console.log(user_pw);
} // 함수 준비 끝 위치
func1(); // 함수 호출 -> 검색을 하지 않아도 뜨길 원하면 호출 아니면 없어도 된다.

// 목표) 원하는 영화명을 검색하고 검색하기 버튼을 누르면 영화명(토이스토리), 개봉일이 콘솔에 출력
const movie_name = '토이스토리5';
const movie_date = '26.07.07';
function func2(){
    console.log(movie_name)
    console.log(movie_date)
}
func2();

// 목표) 노트북 검색하기 버튼을 클릭하면 삼성 노트북, 15인치 정보가 콘솔에 출력하기
// 변수명 참고) 노트북 모델명, 노트북 크기, 노트북 검색
const notbook_name = 'Galaxy Book5 Pro Ultra 5';
const notbook_size = '14인치';
function func3(){
    console.log(notbook_name);
    console.log(notbook_size);
}

// 목표) 여행 검색하기 클릭 시 여행지/가격/특산물 정보 콘솔 출력
// 부산/30만원/밀면
const travel_name = '부산';
let travel_price = '30만원';
let travel_specialty = '밀면';
function travel_info(){
    console.log(travel_name);
    console.log(travel_price);
    console.log(travel_specialty);
}