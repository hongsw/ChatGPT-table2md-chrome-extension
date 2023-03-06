// 버튼 엘리먼트 생성
var button = document.createElement("button");
button.innerHTML = "버튼";
button.style.backgroundColor = "blue";
button.addEventListener("click", function() {
  alert("버튼이 클릭되었습니다.");
});

// 버튼을 추가할 위치 선택
var target = document.querySelector("특정 태그의 선택자");
var parent = target.parentNode;

// 버튼 추가
parent.insertBefore(button, target.nextSibling);


/**
 * 버튼 엘리먼트 생성

document.createElement() 함수를 사용하여 버튼 엘리먼트를 생성합니다.
버튼 엘리먼트의 내용, 스타일, 이벤트 리스너 등을 설정할 수 있습니다.
버튼을 추가할 위치 선택

특정 태그를 선택합니다.
선택한 태그의 부모 엘리먼트를 가져옵니다.
버튼 추가

부모 엘리먼트의 insertBefore() 함수를 사용하여 버튼 엘리먼트를 삽입합니다.
선택한 태그 다음에 버튼이 추가됩니다.
아래는 위의 방법을 구현한 JavaScript 코드입니다.
 */