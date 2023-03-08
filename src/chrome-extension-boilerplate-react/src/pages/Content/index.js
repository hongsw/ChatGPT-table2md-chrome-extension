const init = () => {
  const table = document.querySelectorAll('table');
  console.log('table 찾기');
  table.forEach((table, idx) => {
    if (document.getElementById(`table_${idx}`)) return;
    table.setAttribute('id', `table_${idx}`);

    // 각 테이블 마다 버튼 생성
    const CopyButton = document.createElement('button');
    CopyButton.setAttribute('id', `table_copy_button_${idx}`);
    CopyButton.setAttribute('class', 'border-2 border-black ml-[428px]');
    CopyButton.innerText = 'copy';

    // div 요소 생성 및 속성 설정
    const div = document.createElement('div');
    div.classList.add('table-wrapper');
    div.setAttribute('class', 'flex-row w-full');

    // div 부모 요소에 버튼 추가
    div.appendChild(CopyButton);

    // table 요소를 div 요소로 감싸기
    table.parentNode.insertBefore(div, table);
    div.appendChild(table);

    // Copy Button Event
    CopyButton.addEventListener('click', () => {
      console.log(table.innerHTML);
    });
  });
};

// 변화 감지 대상 요소 선택
const targetNode = document.querySelector('main > div > div > div ');

// MutationObserver 생성
const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    // 새로운 노드가 추가되었을 때 처리할 내용 작성
    console.log(mutation);
    if (mutation.previousSibling?.nodeName === 'THEAD') {
      init();
    }
  });
});

// 감시할 이벤트 타입과 옵션 설정
const config = { childList: true, subtree: true };

// 감시할 요소와 감시 옵션을 MutationObserver에 등록
observer.observe(targetNode, config);
