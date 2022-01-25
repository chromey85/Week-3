const letters = document.getElementsByTagName("li");
const rLetters = document.getElementsByClassName("not-orange");

// let first = letters [0];
console.log(letters);

// for (let i = 0; i < letters.length; i++) {
//     letters[i].style.color = "orange";
// }

// for (let i = 0; i < rLetters.length; i++) {
//     rLetters[i].style.color = "red";
// }

for (let i = 0; i < letters.length; i++) {
    if (letters[i].className == "not-orange"){
        letters[i].style.color = "green";
    }
        else{
            letters[i].style.color = "orange";
        }
    
}