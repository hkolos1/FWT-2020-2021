var buttons = document.querySelectorAll(".plus");
var list = document.querySelectorAll(".sakrij");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        if (buttons[i].innerHTML === "+") {
            buttons[i].innerHTML = "-";
        } else {
            buttons[i].innerHTML = '+'
        }
        list[i].classList.toggle("prikaži");
    });
}

