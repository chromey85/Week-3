const input = document.getElementById("input");
const submit = document.getElementById("submit");
const remove = document.querySelector("#remove");
const list = document.querySelector("#list"); 

remove.addEventListener("click", () => {
    let lastItem = document.querySelector("li:last-child");
    list.removeChild(lastItem);
});

submit.addEventListener("click", () => {
    let listItem = document.createElement("li");
    let list = document.querySelectorAll("ul")[0];
    listItem.inputContent = input.value;
    list.appendChild(listItem);
    input.value = "";
})