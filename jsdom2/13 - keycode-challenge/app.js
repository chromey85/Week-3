const output = document.querySelectorAll(".output-box");
const big = document.querySelector(".output");

document.addEventListener("keyup", (i) => {
    console.log(i);
    output[0].innerHTML = i.key;
    output[1].textContent = i.keyCode;
    output[2].textContent = i.code;
    big.innerHTML = i.keyCode
})

// .output.content = i.keyCode