// checking the 'cage' checkbox

// document.getElementById("cage").addEventListener("click", function(){
//     console.log("Checkbox was clicked.");
// });

// document.getElementById("cage").addEventListener("click", function(){
//     console.log(this);
// });

document.getElementById("cage").addEventListener("click", function(){
    console.log("Checkbox is: " + this.checked);
    // 'this' is referring to the selected "cage" checkbox
    // var checked = document.getElementById("cage").checked;
    // console.log(checked);
});

document.getElementById("vet").addEventListener("click", function(){
    console.log("Vet button pushed.");
    // check the "cage checkbox
    var cage_status = document.getElementById("cage").checked;
    console.log(cage_status);

    // vax cheetah message
    var email_paragraph = document.getElementById("email"); // Line-1

    // this line has moved into if-Statement
    // email_paragraph.innerHTML = 'Now is good time to vax the cheetah.'; 
    // Line-2
    
    // if "cage" is true,
    if(cage_status == true) {
        console.log("Cheetah is in the cage.");
        email_paragraph.innerHTML = "Now is good time to vax the cheetah.";
    } else {
        console.log("The cage is not locked..!");
        email_paragraph.innerHTML = "Cage is open. Run!!!";
    }

    // change email paragraph

    // if "cage" is false
    // change email paragraph to something else
});




// document.getElementById("cage").addEventListener("click", function(){
//     var checked = document.getElementById("cage").checked;
//     console.log(checked);
// });

// or, you could,..
// document.querySelector(#cage)

// 1st, the "respond" for EventListener can be a function, in a form of,..
// document.getElementById("cage").addEventListener("click", fuction()) {
//     // Here goes the function from above
// }

// 2nd way of assigning a fuction is..
// this one good, when you have many functions to attatch..!
// document.getElementById("cage").addEventListener("click", doStuff());

// fuction doStuff() {
//     // function goes here..
// }

// Interesting ...!

// document.getElementById("cage").addEventListener("click", function(){
//     console.log(this);
// });

