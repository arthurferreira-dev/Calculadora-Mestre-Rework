let numbers = 0;
let n1 = undefined;
let n2 = undefined;
let res = document.getElementById('res');

function One() {
    numbers += 1;
    if (numbers == 1) {
        n1 = 1;
    } else if (numbers == 2) {
        n2 = 1;
    }
    res.innerHTML += '1';
}

function Plus() {
    res.innerHTML += '+';
}