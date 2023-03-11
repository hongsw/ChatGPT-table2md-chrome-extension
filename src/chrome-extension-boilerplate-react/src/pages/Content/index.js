const copyBtnDefaultText = 'copy table';
const copyBtnDefaultStyle =
  'border border-black text-xs p-1 px-2 mb-3 rounded font-semibold hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200';

const copyCompleteNotification = (targetIdx, state = true) => {
  const targetBtn = document.getElementById(`table_copy_button_${targetIdx}`);
  if (!state) {
    targetBtn.innerHTML = `<div style="display: flex; justify-content: center; align-items: center;"><svg width="16" height="16" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm3.53 6.47-.084-.073a.75.75 0 0 0-.882-.007l-.094.08L12 10.939l-2.47-2.47-.084-.072a.75.75 0 0 0-.882-.007l-.094.08-.073.084a.75.75 0 0 0-.007.882l.08.094L10.939 12l-2.47 2.47-.072.084a.75.75 0 0 0-.007.882l.08.094.084.073a.75.75 0 0 0 .882.007l.094-.08L12 13.061l2.47 2.47.084.072a.75.75 0 0 0 .882.007l.094-.08.073-.084a.75.75 0 0 0 .007-.882l-.08-.094L13.061 12l2.47-2.47.072-.084a.75.75 0 0 0 .007-.882l-.08-.094-.084-.073.084.073Z" fill="#E84B3C"/></svg> <span style="margin-left: 5px;">copy failed</span></div>`;
    setTimeout(() => {
      targetBtn.innerHTML = copyBtnDefaultText;
    }, 1500);
    return;
  }
  targetBtn.innerHTML = `<div style="display: flex; justify-content: center; align-items: center;"><svg width="16" height="16" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm3.22 6.97-4.47 4.47-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06Z" fill="#2ECC70"/></svg> <span style="margin-left: 5px;">copy completed!</span></div>`;
  setTimeout(() => {
    targetBtn.innerHTML = copyBtnDefaultText;
  }, 1500);
};

const saveTheMdToClipboard = async (text, targetIdx) => {
  try {
    await navigator.clipboard.writeText(text);
    copyCompleteNotification(targetIdx);
  } catch (err) {
    copyCompleteNotification(targetIdx, false);
    console.error('Failed to copy!', err);
  }
};

const convertHtmlToMd = (table, targetIdx, sort = 'left') => {
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

  saveTheMdToClipboard(`${header}\n${separator}\n${rows}`, targetIdx);

  return;
};

const init = () => {

  // 3초마다 반복해서 실행하면 되지만, 페이지에 부하를 주는 방법이라서 개선이 피룡
  setInterval(function() {
    const table = document.querySelectorAll('table');
    table.forEach((table, idx) => {
      if (document.getElementById(`table_${idx}`)) return;
      table.setAttribute('id', `table_${idx}`);
      table.setAttribute('class', 'm-0');
      // 각 테이블 마다 버튼 생성
      const copyButton = document.createElement('button');
      copyButton.setAttribute('id', `table_copy_button_${idx}`);
      copyButton.setAttribute('class', `${copyBtnDefaultStyle}`);
      copyButton.innerText = copyBtnDefaultText;

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
        convertHtmlToMd(table, idx);
      });
    });

  }, 3000); // 3000ms (3초) 후에 실행

};

// 변화 감지 대상 요소 선택
const targetNode = document.querySelector('main > div > div > div ');

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
