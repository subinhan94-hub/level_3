# 자바스크립트&제이쿼리
## 프로젝트 제작 시 항상 준비해야하는 파일, 폴더 순서
1. 프로젝트 폴더명 영문으로 의미있게 작성하기
2. `index.html`, `REAMDE.md` 생성
3. `styles`, `scripts`, `images` 폴더 생성
4. `styles/reset.css` , `styles/index.css` 생성
5. `scripts/index.js` 생성
## 자바스크립트
### 객체, 속성, 이벤트, 함수
* 객체 : 웹 앱에서 사용하는 실제 대상(버튼, 링트 이미지 등), 보통 변수로 데이터(객체)를 저장해서 사용
* 이벤트 : 웹 앱을 이용하는 사용자의 행동(클릭, 터치, 드래그 등)
    * `<button onclick="클릭 시 실행되는 함수">`
* 함수 : 2번 이상 반복되는 실행 내용
    * 함수 생성과 호출을 각각 다르게 구분함.
    * 함수 생성 : `function 함수명(){함수 호출 시 반복 실행 할내용;}` 생성만으론 절대 결과가 실행되지 않음. 반드시 호출 별도로 진행해야함
    * 함수 호출 : 위 함수 생성 바깥쪽에 `함수명()` 작성, 이벤트와 함께 사용하기도 함. `onclick="함수명();"`
### 변수(데이터(객체)를 저장하는 저장소)
* 변수 키워드 변수명 대입연산자 대입 값
* `let user_name = '홍길동' ;`
//user_name이란 변수를 생성해서  '홍길동'이란 데이터를 대입한다.
1. `var` : 오래된 선언 방식, 이름 중복 가능
2. `let` : 이름 중복 불가능, 재사용(수정) 가능
3. `const` : 이름 중복 불가능, 재사용(수정) 불가
### 객체, 속성, 암수 작성 문법
* 태그 예) `<a href="./index.html"></a>`
* 태그 예) `<video src="./cat.ma4" autoplay>`
* `객체.속성`
    * 객체의 속성을 읽기
    * `a.href;`
    * `video.src;`, `video.autoplay`
    * `span.textContent;` //span태그 안 내용을 읽는다. <span>내용</span>
    * `input.value;` //value는 input 전용 속성으로 다른 태그에 사용불가
* `객체.속성 = '값';`
    * 객체의 속성 값을 대입한다
    * 대입 시 기존값이 있으면 ? 기본 값 자동 제거되고 새로운 값 대입
    * `a.href = './reset.css';`
    * `video.src = './dog.ma4';`
    * `video.autoplay = 0;`
    * `<span>0</span>` 
        * `span.textContent=1` // span 원래 내용은 제거하고 1 새로 대입
        * `span.textContent= span.textContent+1;` // 기존 span에 1을 더해 대입한다.
    * `<input> type="text" value="1">`
        * `input.value = 2;` // input의 내용 1->2로 변경
        * `input.value = input.value +2;` // 기존 input에 2을 더해 대입한다.
* `객체.함수();`
    * 객체를 실행한다
    *`객체.함수() = '값';` (X)
* `이벤트="함수();"`
    * 이벤트 동작 시 특정 함수를 실행한다.
    * `<태그 onclick="func1();">` // 함호출
    * 위 작성 전 준비사항 : `function func1(){반복실행명령}` // 함수생성
## DOM(document objet model)
### JS에서 제어하고 싶은 HTML 요소가 있을 경우 순서
1. 제어하고 싶은 HTML 수와 클래스, id 등 확인
2. 용도에 맞게 변수명 생성 `const 변수명`
3. 2번 변수에 대입연산자로 객체 대입하기
    * `const 변수명=document.querySelector('HTML대상');`
4. 안전한 작업을 위해 콘솔로 변수 체크하기
    * `console.log(검사하고싶은변수명);`
    * 콘솔 결과 화면에서 `null` 또는 오류가 없는지 확인
    * `null`이 뜬다면 HTML script 작성 위치로 가서 속성 추가
        * `<script src="경로" defer><script>`
## 실제 요소 크기와 관계없는 다양한 디자인 포인트 만드는 방법
### css의 가상선택자(실제 태그 없이 가상의 요소를 만든다)
### after, before
* `선택자::after`
* `선택자::before`
* 가상 선택자의 필수속성 : `content`, `display` , `width` `height`, `position`
### 작성예시
`선택자::after {`
    `content:'';display:block;`
    `width:가로크기px; height:세로크기px;`
    `position:absolute; left right top botton 등의 위치 좌표 추가작성`
`}`
* after, before가 적용된 선택자에 `position:relative`기준잡기
# form 태그
## form태그와 action, method
* form - 검색, 로그인, 회원가입 등의 특정 주제로 묶여있는 그룹
    * (아래) 폼 내부에서 사용할 수 있는 태그 (블록)
    * filedset - 폼 내부에서 묶어주는 역할
    * legend - 묶은 역할이 어떤 주제인지 알려주는 제목
* action - 그룹에 작성 또는 선택된 사용자 정보를 전달하는 서버 주소
* method - 데이터를 보내는 전송 방식(get, post(보안))
## input 태그와 type
* input - 사용자가 입력, 선택할 때 작성하는 시작 태그 (type 필수)
    * type : text, password, number, email, search, date, time, url
    * 위에 없는 type은 대부분 text로 처리하고 나머지 name으로 구분한다.
### 추가적인 속성
* placeholder : 입력창 안에 보여지는 글 (글 쓰면 사라진다.)
* autofocus : 페이지가 읽혀지면 커서가 깜박거린다.
* autocomplete : 자동완성 기능 -> on/off 설정해야함
* required : 필수 입력 값
* readonly : 읽기 전용
* disabled : 비활성화 (입력이 불가능해짐)
* maxlength / minlength : 최대 몇 글자 제한 / 최소 몇 글자 제한
### input 선택 속성
* radio : 여러 개 중 하나를 선택해야 할 때
* checkbox : 여러 개 중 동시에 선택할 때
* select : 목록에 전체 틀
* option : 내부에서 만드는 선택지
## textarea
* 긴 글을 입력할 때 사용하는 태그
## name
* action으로 저장된 사이트 서버 위치에 사용자가 입력한 데이터를 전송할 때 구분하는 데이터 명칭
* 이름 tom, 아이디 tom 값만 보고 구분을 정확히 못하는 경우 name 필수
* userName => tom, userId => tom `name=userName`
* 선택 양식에서는 name의미를 그룹 명으로 사용, 위 작성 내용은 입력 양식 해당
## value
* 입력방식 : 처음부터 입력된 초기 값 (쇼핑몰의 수량 1)
* 선택양식 : 위 name처럼 데이터 구분 명칭
## id, class속성
* js, css에서 구분하기 위한 디자인 또는 동적 프로그래밍 용도 이름
