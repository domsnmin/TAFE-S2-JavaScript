// https://www.w3schools.com/js/js_typeof.asp

var string = "I'm a string"; // this is a string.
var num = 6; // this is a number, technically a integer.
var checkbox = true; // this is a boolean (true/false).

// var = let = const >> with some differences

const shopping_list = ["Bread", "Milk", "Eggs", "Coffee", "Chocolate", "Tea", "Ice Cream"];

// console.log(shopping_list);
// console.log(shopping_list[2]);
// console.log(shopping_list.length); // Length of an array

// for (let i = 0; i < 6; i++) {
//     console.log(shopping_list[i]);
// }


// Loop through an Array

console.log("...");

for (let i = 0; i < shopping_list.length; i++) {
    console.log(shopping_list[i]);
}

// document.getElementById('print').addEventListener('click', function(){
//     let compiled_list = "";
//     for (let i = 0; i < shopping_list.length; i++) {
//         compiled_list += shopping_list[i];
//         // it is same as,
//         // compiled_list = compiled_list + shopping_list[i];
//     }

//     document.getElementById('shopping-printout').innerHTML = compiled_list;
// });



// Above can be re-written, in order to make it a list...!

document.getElementById('print').addEventListener('click', function(){
    let compiled_list = "<ul>";
    for (let i = 0; i < shopping_list.length; i++) {
        compiled_list += "<li>" + shopping_list[i] + "</li>";
        // it is same as,
        // compiled_list = compiled_list + shopping_list[i];
    }
    compiled_list += "</ul>"; // to close the "ul"
    // it works without "compiled_list += "</ul>";" ???

    document.getElementById('shopping-printout').innerHTML = compiled_list;
});

