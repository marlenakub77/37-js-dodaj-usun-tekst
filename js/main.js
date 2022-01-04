let myParagraph = document.getElementById("tekst");
let buttonAdd = document.getElementById("dodaj");
let buttonDel = document.getElementById("usun");

buttonAdd.onclick = function() {
    myParagraph.textContent = "Dawno, dawno temu...";
}

buttonDel.onclick = function () {
    myParagraph.textContent = "";
}