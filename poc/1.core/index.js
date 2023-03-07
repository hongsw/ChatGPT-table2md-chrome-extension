const convertHtmlToMd = (sort = 'left') => {
  const table = document.getElementsByTagName('table')[0];
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

  return `${header}\n${separator}\n${rows}`;
};

const saveTheMdToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error('Failed to copy!', err);
  }
};

document
  .getElementsByTagName('button')[0]
  .addEventListener('click', convertHtmlToMd.bind(document, 'left'));
