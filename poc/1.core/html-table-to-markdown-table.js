function toMarkdown(doc) {
    let s = '| ';

    let thead = doc.querySelector('thead');
    let headcells = thead.querySelectorAll('td');
    for (let i = 0; i < headcells.length; i++) {
        let cell = headcells[i];
        s += cell.textContent.trim() + ' | ';
    }

    s += '\n'

    for (let i = 0; i < headcells.length; i++) {
        s += '|---------'
    }

    s += '|\n'

    let tbody = doc.querySelector('tbody');
    let trs = tbody.querySelectorAll('tr');
    for (let i = 0; i < trs.length; i++) {
        s += '| '
        let tr = trs.item(i);
        let tds = tr.querySelectorAll('td');
        for (let j = 0; j < tds.length; j++) {
            let td = tds.item(j);
            s += td.textContent.trim() + ' | ';
        }
        s += '\n';
    }
    return s;
}

// Usage Example: only one table on the page
var md = toMarkdown(document);
console.log(md);

// Usage Example: specify table container
var el = querySelector('#table-container');
var md = toMarkdown(el);
console.log(md);