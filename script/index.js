let cnt, display;

function addCount() {
    cnt++;
    display.innerHTML = cnt;
}

function minusCount() {
    cnt--;
    display.innerHTML = cnt;
}

function timesCount() {
    cnt *= 2;
    display.innerHTML = cnt;
}

function squareCount() {
    cnt = cnt * cnt;
    display.innerHTML = cnt;
}

function resetCount() {
    cnt *= 0;
    display.innerHTML = cnt;
}

window.addEventListener("load", ()=>{
    display = document.getElementById("display");
    btnAdd = document.getElementById("btnAdd");
    btnMinus = document.getElementById("btnMinus");
    btnTimes = document.getElementById("btnTimes");
    btnSquare = document.getElementById("btnSquare");
    btnReset = document.getElementById("btnReset");

    cnt = 0;

    btnAdd.addEventListener("click", addCount);
    btnMinus.addEventListener("click", minusCount);
    btnTimes.addEventListener("click", timesCount);
    btnSquare.addEventListener("click", squareCount);
    btnReset.addEventListener("click", resetCount);
})
