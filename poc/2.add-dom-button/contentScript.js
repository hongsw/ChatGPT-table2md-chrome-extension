// table 요소 선택
const table = document.querySelectorAll("table");

table.forEach((table, idx) => {
  table.setAttribute("class", "border-2 border-black");
  table.setAttribute("id", `table_${idx}`);

  // 각 테이블 마다 버튼 생성
  const CopyButton = document.createElement("button");
  CopyButton.setAttribute("id", `table_copy_button_${idx}`);
  CopyButton.setAttribute("class", "border-2 border-black ml-[428px]");
  CopyButton.innerText = "copy";

  // div 요소 생성 및 속성 설정
  const div = document.createElement("div");
  div.classList.add("table-wrapper");
  div.setAttribute("class", "flex-row w-full");

  // div 부모 요소에 버튼 추가
  div.appendChild(CopyButton);

  // table 요소를 div 요소로 감싸기
  table.parentNode.insertBefore(div, table);
  div.appendChild(table);

  // Copy Button Event
  CopyButton.addEventListener("click", () => {
    console.log(table.innerHTML);
  });
});
