const output = document.querySelectorAll(".output-box");
const big = document.querySelector(".output");
const cover = document.querySelector(".text");
const cards = document.querySelectorAll(".output, .event");

document.addEventListener("keyup", (i) => {
    console.log(i);
    cover.style.display = "none"
    cover.style.index = "-1"
    cards[0].style.display = "flex"
    cards[1].style.display = "flex"
    output[0].innerHTML = i.key;
    output[1].textContent = i.keyCode;
    output[2].textContent = i.code;
    big.innerHTML = i.keyCode;
})
