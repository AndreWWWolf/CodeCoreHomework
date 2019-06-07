const name1 = process.argv[2];
const name2 = process.argv[3];
const name3 = process.argv[4];

let arr =  process.argv.slice(2);

// Function to create initial line length
function drawLine(num) {
    let line = '';
    for (let i = 0; i < num; i++) {
        line += '\u2501';
    }
    return line;
}
// function to create top border to match initial line length
function drawTopBorder(num) {
    let line = '';
    line += '\u250F';
    for (let i = 0; i < num; i++) {
        line += '\u2501';
    }
    line += '\u2513';
    return line;
}
// function to create middle border between name 1 && 2, 2 && 3
function drawMiddleBorder(num) {
    let line = '';
    line += '\u251F';
    for (let i = 0; i < num; i++) {
        line += '\u2501';
    }
    line += '\u252B';
    return line;
}
// function to create bottom border to match initial line length
function drawBottomBorder(num) {
    let line = '';
    line += '\u2517';
    for (let i = 0; i < num; i++) {
        line += '\u2501';
    }
    line += '\u251B';
    return line;
}
// function to add vertical bars at the spaces outside of the longest string in the arr
function drawBarsAround(str, spc) {
    let line = '';
    line += '\u2503';
    line += str;
    for (let i = 0; i < spc; i++) {
        line += ' ';
    }
    line += '\u2503';
    return line;
}
// function to combine all lines together as a box
function boxIt(arr) {
    let max = 0;
    let arrPos = arr.length;
    for (let val of arr) {
        if (val.length > max) {
            max = val.length;
        }
    }
    let line = '';
    line += drawTopBorder(max);
    let counter = 0;
    for (let val of arr) {
        line += '\n';
        line += drawBarsAround(val, (max - val.length));
        counter += 1;
        if (counter < arrPos) {
            line += '\n';
            line += drawMiddleBorder(max);
        }
    }
    line += '\n';
    line += drawBottomBorder(max);
    return line;
}
console.log(boxIt(arr));