const text = ["Photographer","Developer","Youtuber","Freelancer"];
let letter ="";
let index =0;
let count = 0;
let currentText ="";

(function type() {
    if (count === text.length) {
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0,++index);

    document.querySelector(".type").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 500);
})();