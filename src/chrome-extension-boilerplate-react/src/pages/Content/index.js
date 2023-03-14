import html2canvas from 'html2canvas';

const copyBtnDefaultText = `<div style="display: flex; justify-content: center; align-items: center;"><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19.53 8L14 2.47C13.8595 2.32931 13.6688 2.25018 13.47 2.25H11C10.2707 2.25 9.57118 2.53973 9.05546 3.05546C8.53973 3.57118 8.25 4.27065 8.25 5V6.25H7C6.27065 6.25 5.57118 6.53973 5.05546 7.05546C4.53973 7.57118 4.25 8.27065 4.25 9V19C4.25 19.7293 4.53973 20.4288 5.05546 20.9445C5.57118 21.4603 6.27065 21.75 7 21.75H14C14.7293 21.75 15.4288 21.4603 15.9445 20.9445C16.4603 20.4288 16.75 19.7293 16.75 19V17.75H17C17.7293 17.75 18.4288 17.4603 18.9445 16.9445C19.4603 16.4288 19.75 15.7293 19.75 15V8.5C19.7421 8.3116 19.6636 8.13309 19.53 8ZM14.25 4.81L17.19 7.75H14.25V4.81ZM15.25 19C15.25 19.3315 15.1183 19.6495 14.8839 19.8839C14.6495 20.1183 14.3315 20.25 14 20.25H7C6.66848 20.25 6.35054 20.1183 6.11612 19.8839C5.8817 19.6495 5.75 19.3315 5.75 19V9C5.75 8.66848 5.8817 8.35054 6.11612 8.11612C6.35054 7.8817 6.66848 7.75 7 7.75H8.25V15C8.25 15.7293 8.53973 16.4288 9.05546 16.9445C9.57118 17.4603 10.2707 17.75 11 17.75H15.25V19ZM17 16.25H11C10.6685 16.25 10.3505 16.1183 10.1161 15.8839C9.8817 15.6495 9.75 15.3315 9.75 15V5C9.75 4.66848 9.8817 4.35054 10.1161 4.11612C10.3505 3.8817 10.6685 3.75 11 3.75H12.75V8.5C12.7526 8.69811 12.8324 8.88737 12.9725 9.02747C13.1126 9.16756 13.3019 9.24741 13.5 9.25H18.25V15C18.25 15.3315 18.1183 15.6495 17.8839 15.8839C17.6495 16.1183 17.3315 16.25 17 16.25Z" fill="#acacbe"></path> </g></svg> <span style="margin-left: 5px;">Copy Table</span></div>`;
const captureBtnDefaultText = `<div style="display: flex; justify-content: center; align-items: center;"><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.3944 7C18.9574 7 19.2389 7 19.4711 7.05628C20.199 7.2327 20.7673 7.801 20.9437 8.52887C21 8.76107 21 9.04256 21 9.60555L21 16C21 17.8856 21 18.8284 20.4142 19.4142C19.8284 20 18.8856 20 17 20L16 20L8 20L7 20C5.11438 20 4.17157 20 3.58579 19.4142C3 18.8284 3 17.8856 3 16L3 9.60555C3 9.04256 3 8.76107 3.05628 8.52887C3.23271 7.801 3.80101 7.2327 4.52887 7.05628C4.76107 7 5.04257 7 5.60555 7V7C5.92098 7 6.07869 7 6.2261 6.9779C6.68235 6.90952 7.10092 6.6855 7.4109 6.34382C7.51105 6.23342 7.59853 6.1022 7.7735 5.83975L8 5.5C8.39637 4.90544 8.59456 4.60816 8.86549 4.40367C9.03094 4.27879 9.2148 4.18039 9.41048 4.112C9.73092 4 10.0882 4 10.8028 4L13.1972 4C13.9118 4 14.2691 4 14.5895 4.112C14.7852 4.18039 14.9691 4.27879 15.1345 4.40367C15.4054 4.60816 15.6036 4.90544 16 5.5L16.2265 5.83975C16.4015 6.1022 16.4889 6.23342 16.5891 6.34382C16.8991 6.6855 17.3177 6.90952 17.7739 6.9779C17.9213 7 18.079 7 18.3944 7V7Z" stroke="#acacbe" stroke-width="2" stroke-linejoin="round"></path> <path d="M15 13C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13C9 11.3431 10.3431 10 12 10C13.6569 10 15 11.3431 15 13Z" stroke="#acacbe" stroke-width="2"></path> </g></svg><span style="margin-left: 5px;">Capture PNG</span></div>`;
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

    pngButton.addEventListener('click', () => {
      const element = document.getElementById(`table_${idx}`);
      const mode =
        document.querySelector('html').classList[0] === 'dark'
          ? null
          : '#ffffff';

      html2canvas(element, { backgroundColor: mode })
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
const targetNode = document.querySelector('html');

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
