let oregonNum = 0;
let arizonaNum = 0;
let utahNum = 0;
let montanaNum = 0;

function onOregonClick() {
    oregonNum += 1;
    document.getElementById("oregonClicks").innerHTML = oregonNum;
}
function onArizonaClick() {
    arizonaNum += 1;
    document.getElementById("arizonaClicks").innerHTML = arizonaNum;
}
function onUtahClick() {
    utahNum += 1;
    document.getElementById("utahClicks").innerHTML = utahNum; 
}
function onMontanaClick() {
    montanaNum += 1;
    document.getElementById("montanaClicks").innerHTML = montanaNum;
}

function toggleDiv(){
    let x = document.getElementById("showClasses");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
}