const listItems = document.querySelectorAll("li:nth-child(even)");
const list = document.querySelectorAll("li");
const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];

console.log(listItems);
console.log(listItems.length);

// for (let i = 0; 1 < listItems.length; i++){
//     listItems[i].style.color = "lightgreen"
//     };

let x = 0
for (let i = 0; 1 < list.length; i++){
    list[i].style.color = colours[x]
    x++
    if (x == colours.length){
        x = 0
        }
    }; 

console.log(list);





