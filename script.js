// Theme Switcher Logic
function setTheme(themeName) {
    document.body.className = 'theme-' + themeName;
}

// Calculator Logic
let currentStr = '0';
let prevStr = '';
let op = null;

const currDisplay = document.getElementById('curr-val');
const prevDisplay = document.getElementById('prev-val');

function update() {
    currDisplay.innerText = currentStr;
    prevDisplay.innerText = op ? `${prevStr} ${op}` : '';
}

function addNum(n) {
    if (n === '.' && currentStr.includes('.')) return;
    if (currentStr === '0' && n !== '.') currentStr = n;
    else currentStr += n;
    update();
}

function setOp(symbol) {
    if (currentStr === '') return;
    if (prevStr !== '') calc();
    op = symbol;
    prevStr = currentStr;
    currentStr = '';
    update();
}

function clearDisplay() {
    currentStr = '0';
    prevStr = '';
    op = null;
    update();
}

function deleteNum() {
    currentStr = currentStr.slice(0, -1) || '0';
    update();
}

function calc() {
    let result;
    const p = parseFloat(prevStr);
    const c = parseFloat(currentStr);
    if (isNaN(p) || isNaN(c)) return;

    switch (op) {
        case '+': result = p + c; break;
        case '-': result = p - c; break;
        case '*': result = p * c; break;
        case '/': result = p / c; break;
        default: return;
    }
    currentStr = result.toString();
    op = null;
    prevStr = '';
    update();
}