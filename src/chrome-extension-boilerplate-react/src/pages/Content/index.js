const saveTheMdToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error('Failed to copy!', err);
  }
};

const convertHtmlToMd = (table, sort = 'left') => {
  const tr = table.getElementsByTagName('tr');
  // Table header
  let header = '|';
  const th = tr[0].getElementsByTagName('th');
  for (let i = 0; i < th.length; i++) {
    header += `${th[i].innerHTML}|`;
  }

  // Table separator
  let separator = '|';
  const sortOption = {
    left: ':---|',
    center: ':---:|',
    right: '---:|',
  };
  for (let i = 0; i < table.rows[0].cells.length; i++) {
    separator += sortOption[sort];
  }

  // Table rows
  let rows = '';
  for (let i = 1; i < tr.length; i++) {
    let row = '|';
    const td = tr[i].getElementsByTagName('td');
    for (let j = 0; j < td.length; j++) {
      row += `${td[j].innerHTML}|`;
    }
    rows += `${row}\n`;
  }

  saveTheMdToClipboard(`${header}\n${separator}\n${rows}`);

  return;
};

const init = () => {
  const table = document.querySelectorAll('table');
  table.forEach((table, idx) => {
    if (document.getElementById(`table_${idx}`)) return;
    table.setAttribute('id', `table_${idx}`);
    table.setAttribute('class', 'm-0');
    // 각 테이블 마다 버튼 생성
    const copyButton = document.createElement('button');
    copyButton.setAttribute('id', `table_copy_button_${idx}`);
    copyButton.setAttribute(
      'class',
      'border border-black text-xs p-0.5 px-1 mb-1 rounded font-semibold hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200'
    );
    copyButton.innerText = 'copy table';

    // div 요소 생성 및 속성 설정
    const div = document.createElement('div');
    div.classList.add('table-wrapper');
    div.setAttribute('class', 'w-full flex flex-col relative items-end mt-5');

    // div 부모 요소에 버튼 추가
    div.appendChild(copyButton);

    // table 요소를 div 요소로 감싸기
    table.parentNode.insertBefore(div, table);
    div.appendChild(table);

    // Copy Button Event
    copyButton.addEventListener('click', () => {
      convertHtmlToMd(table);
    });
  });
};

// 변화 감지 대상 요소 선택
const targetNode = document.querySelector('body');

// MutationObserver 생성
const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    // 새로운 노드가 추가되었을 때 처리할 내용 작성
    if (mutation?.type === 'childList') {
      init();
    }
  });
});

// 감시할 이벤트 타입과 옵션 설정
const config = { childList: true, subtree: true };
// 감시할 요소와 감시 옵션을 MutationObserver에 등록
observer.observe(targetNode, config);
