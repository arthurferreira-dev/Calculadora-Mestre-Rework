let n1 = undefined;
let n2 = undefined;
let res = document.getElementById('res');

function One() {
    numbers1 += 1;
    if (numbers1 == 1) {
        n1 = 1;
    } else if (numbers1 == 2) {
        n2 = 1;
    }
    res.innerHTML += '1';
}

function Two() {
    numbers2 += 2;
    if (numbers2 == 2) {
        n1 = 2;
    } else if (numbers2 == 4) {
        n2 = 2;
    }
    res.innerHTML += '2';
}

function Plus() {
    res.innerHTML += '+';
}

function Calc() {
    
}