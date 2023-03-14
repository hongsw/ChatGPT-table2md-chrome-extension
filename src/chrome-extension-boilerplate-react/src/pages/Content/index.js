import html2canvas from 'html2canvas';

const copyBtnDefaultText = `<div style="display: flex; justify-content: center; align-items: center;"><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19.53 8L14 2.47C13.8595 2.32931 13.6688 2.25018 13.47 2.25H11C10.2707 2.25 9.57118 2.53973 9.05546 3.05546C8.53973 3.57118 8.25 4.27065 8.25 5V6.25H7C6.27065 6.25 5.57118 6.53973 5.05546 7.05546C4.53973 7.57118 4.25 8.27065 4.25 9V19C4.25 19.7293 4.53973 20.4288 5.05546 20.9445C5.57118 21.4603 6.27065 21.75 7 21.75H14C14.7293 21.75 15.4288 21.4603 15.9445 20.9445C16.4603 20.4288 16.75 19.7293 16.75 19V17.75H17C17.7293 17.75 18.4288 17.4603 18.9445 16.9445C19.4603 16.4288 19.75 15.7293 19.75 15V8.5C19.7421 8.3116 19.6636 8.13309 19.53 8ZM14.25 4.81L17.19 7.75H14.25V4.81ZM15.25 19C15.25 19.3315 15.1183 19.6495 14.8839 19.8839C14.6495 20.1183 14.3315 20.25 14 20.25H7C6.66848 20.25 6.35054 20.1183 6.11612 19.8839C5.8817 19.6495 5.75 19.3315 5.75 19V9C5.75 8.66848 5.8817 8.35054 6.11612 8.11612C6.35054 7.8817 6.66848 7.75 7 7.75H8.25V15C8.25 15.7293 8.53973 16.4288 9.05546 16.9445C9.57118 17.4603 10.2707 17.75 11 17.75H15.25V19ZM17 16.25H11C10.6685 16.25 10.3505 16.1183 10.1161 15.8839C9.8817 15.6495 9.75 15.3315 9.75 15V5C9.75 4.66848 9.8817 4.35054 10.1161 4.11612C10.3505 3.8817 10.6685 3.75 11 3.75H12.75V8.5C12.7526 8.69811 12.8324 8.88737 12.9725 9.02747C13.1126 9.16756 13.3019 9.24741 13.5 9.25H18.25V15C18.25 15.3315 18.1183 15.6495 17.8839 15.8839C17.6495 16.1183 17.3315 16.25 17 16.25Z" fill="#acacbe"></path> </g></svg> <span style="margin-left: 5px;">Copy Table</span></div>`;
const captureBtnDefaultText = `<div style="display: flex; justify-content: center; align-items: center;"><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19.53 8L14 2.47C13.8595 2.32931 13.6688 2.25018 13.47 2.25H11C10.2707 2.25 9.57118 2.53973 9.05546 3.05546C8.53973 3.57118 8.25 4.27065 8.25 5V6.25H7C6.27065 6.25 5.57118 6.53973 5.05546 7.05546C4.53973 7.57118 4.25 8.27065 4.25 9V19C4.25 19.7293 4.53973 20.4288 5.05546 20.9445C5.57118 21.4603 6.27065 21.75 7 21.75H14C14.7293 21.75 15.4288 21.4603 15.9445 20.9445C16.4603 20.4288 16.75 19.7293 16.75 19V17.75H17C17.7293 17.75 18.4288 17.4603 18.9445 16.9445C19.4603 16.4288 19.75 15.7293 19.75 15V8.5C19.7421 8.3116 19.6636 8.13309 19.53 8ZM14.25 4.81L17.19 7.75H14.25V4.81ZM15.25 19C15.25 19.3315 15.1183 19.6495 14.8839 19.8839C14.6495 20.1183 14.3315 20.25 14 20.25H7C6.66848 20.25 6.35054 20.1183 6.11612 19.8839C5.8817 19.6495 5.75 19.3315 5.75 19V9C5.75 8.66848 5.8817 8.35054 6.11612 8.11612C6.35054 7.8817 6.66848 7.75 7 7.75H8.25V15C8.25 15.7293 8.53973 16.4288 9.05546 16.9445C9.57118 17.4603 10.2707 17.75 11 17.75H15.25V19ZM17 16.25H11C10.6685 16.25 10.3505 16.1183 10.1161 15.8839C9.8817 15.6495 9.75 15.3315 9.75 15V5C9.75 4.66848 9.8817 4.35054 10.1161 4.11612C10.3505 3.8817 10.6685 3.75 11 3.75H12.75V8.5C12.7526 8.69811 12.8324 8.88737 12.9725 9.02747C13.1126 9.16756 13.3019 9.24741 13.5 9.25H18.25V15C18.25 15.3315 18.1183 15.6495 17.8839 15.8839C17.6495 16.1183 17.3315 16.25 17 16.25Z" fill="#acacbe"></path> </g></svg> <span style="margin-left: 5px;">Capture PNG</span></div>`;
const btnDefaultStyle =
  'border border-black text-xs p-1 px-2 mb-3 rounded font-semibold hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 m-1';

const copyCompleteNotification = (targetIdx, state = true) => {
  const targetBtn = document.getElementById(`table_copy_button_${targetIdx}`);
  if (!state) {
    targetBtn.innerHTML = `<div style="display: flex; justify-content: center; align-items: center;"><svg width="16" height="16" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm3.53 6.47-.084-.073a.75.75 0 0 0-.882-.007l-.094.08L12 10.939l-2.47-2.47-.084-.072a.75.75 0 0 0-.882-.007l-.094.08-.073.084a.75.75 0 0 0-.007.882l.08.094L10.939 12l-2.47 2.47-.072.084a.75.75 0 0 0-.007.882l.08.094.084.073a.75.75 0 0 0 .882.007l.094-.08L12 13.061l2.47 2.47.084.072a.75.75 0 0 0 .882.007l.094-.08.073-.084a.75.75 0 0 0 .007-.882l-.08-.094L13.061 12l2.47-2.47.072-.084a.75.75 0 0 0 .007-.882l-.08-.094-.084-.073.084.073Z" fill="#E84B3C"/></svg> <span style="margin-left: 5px;">Copy Failed</span></div>`;
    setTimeout(() => {
      targetBtn.innerHTML = copyBtnDefaultText;
    }, 1500);
    return;
  }
  targetBtn.innerHTML = `<div style="display: flex; justify-content: center; align-items: center;"><svg width="16" height="16" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm3.22 6.97-4.47 4.47-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06Z" fill="#2ECC70"/></svg> <span style="margin-left: 5px;">Copy Completed!</span></div>`;
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
  const table = document.querySelectorAll('table');
  table.forEach((table, idx) => {
    if (document.getElementById(`table_${idx}`)) return;
    table.setAttribute('id', `table_${idx}`);
    table.setAttribute('class', 'm-0');
    // 각 테이블 마다 버튼 생성
    const copyButton = document.createElement('button');
    copyButton.setAttribute('id', `table_copy_button_${idx}`);
    copyButton.setAttribute('class', `${btnDefaultStyle}`);
    copyButton.innerHTML = copyBtnDefaultText;

    // png Button
    const pngButton = document.createElement('button');
    pngButton.setAttribute('class', `${btnDefaultStyle}`);
    pngButton.innerHTML = captureBtnDefaultText;

    // div 요소 생성 및 속성 설정
    const parentDiv = document.createElement('div');
    parentDiv.classList.add('table-wrapper');
    parentDiv.setAttribute('class', 'w-full flex flex-col relative items-end');

    const tableBtns = document.createElement('div');
    tableBtns.classList.add('table-buttons');
    tableBtns.setAttribute('class', 'flex justify-center');

    parentDiv.appendChild(tableBtns);
    // div 부모 요소에 버튼 추가
    tableBtns.appendChild(copyButton);
    tableBtns.appendChild(pngButton);

    // table 요소를 div 요소로 감싸기
    table.parentNode.insertBefore(parentDiv, table);
    parentDiv.appendChild(table);

    // Copy Button Event
    copyButton.addEventListener('click', () => {
      convertHtmlToMd(table, idx);
    });

    // to PNG
    const saveAs = (uri, fileName) => {
      let link = document.createElement('a');
      if (typeof link.download === 'string') {
        link.href = uri;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        window.open(uri);
      }
    };
    // if (!state) {
    //   targetBtn.innerHTML = `<div style="display: flex; justify-content: center; align-items: center;"><svg width="16" height="16" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm3.53 6.47-.084-.073a.75.75 0 0 0-.882-.007l-.094.08L12 10.939l-2.47-2.47-.084-.072a.75.75 0 0 0-.882-.007l-.094.08-.073.084a.75.75 0 0 0-.007.882l.08.094L10.939 12l-2.47 2.47-.072.084a.75.75 0 0 0-.007.882l.08.094.084.073a.75.75 0 0 0 .882.007l.094-.08L12 13.061l2.47 2.47.084.072a.75.75 0 0 0 .882.007l.094-.08.073-.084a.75.75 0 0 0 .007-.882l-.08-.094L13.061 12l2.47-2.47.072-.084a.75.75 0 0 0 .007-.882l-.08-.094-.084-.073.084.073Z" fill="#E84B3C"/></svg> <span style="margin-left: 5px;">Copy Failed</span></div>`;
    //   setTimeout(() => {
    //     targetBtn.innerHTML = copyBtnDefaultText;
    //   }, 1500);
    //   return;
    // }
    // targetBtn.innerHTML = `<div style="display: flex; justify-content: center; align-items: center;"><svg width="16" height="16" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm3.22 6.97-4.47 4.47-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06Z" fill="#2ECC70"/></svg> <span style="margin-left: 5px;">Copy Completed!</span></div>`;
    // setTimeout(() => {
    //   targetBtn.innerHTML = copyBtnDefaultText;
    // }, 1500);

    pngButton.addEventListener('click', () => {
      const element = document.getElementById(`table_${idx}`);
      // 캡처 라이브러리를 통해 canvas 오브젝트를 받고 이미지 파일로 리턴
      html2canvas(element, { useCORS: true })
        .then((canvas) => {
          saveAs(canvas.toDataURL('image/png'), `table_${idx}.png`);
          pngButton.innerHTML = `<div style="display: flex; justify-content: center; align-items: center;"><svg width="16" height="16" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm3.22 6.97-4.47 4.47-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06Z" fill="#2ECC70"/></svg> <span style="margin-left: 5px;">Capture Completed!</span></div>`;
          setTimeout(() => {
            pngButton.innerHTML = captureBtnDefaultText;
          }, 2000);
        })
        .catch(
          () =>
            (pngButton.innerHTML = `<div style="display: flex; justify-content: center; align-items: center;"><svg width="16" height="16" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm3.53 6.47-.084-.073a.75.75 0 0 0-.882-.007l-.094.08L12 10.939l-2.47-2.47-.084-.072a.75.75 0 0 0-.882-.007l-.094.08-.073.084a.75.75 0 0 0-.007.882l.08.094L10.939 12l-2.47 2.47-.072.084a.75.75 0 0 0-.007.882l.08.094.084.073a.75.75 0 0 0 .882.007l.094-.08L12 13.061l2.47 2.47.084.072a.75.75 0 0 0 .882.007l.094-.08.073-.084a.75.75 0 0 0 .007-.882l-.08-.094L13.061 12l2.47-2.47.072-.084a.75.75 0 0 0 .007-.882l-.08-.094-.084-.073.084.073Z" fill="#E84B3C"/></svg> <span style="margin-left: 5px;">Copy Failed</span></div>`),
          setTimeout(() => {
            pngButton.innerHTML = captureBtnDefaultText;
          }, 2000)
        );
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
