// alert("External script is working!");
console.log("I'm from external script!"); // This is a test message


function change() {
    var x = "Welcome to Dom's world!";
    document.querySelector('h1').innerText = x;
    console.log("The change function has been run");
}

// Asking the function to RUN
// change();

function styler() {
    document.querySelector('h1').style.color = 'red';
    document.getElementById('text').style.color = "blue";
    console.log("Style has run - h1 is red, text is blue");
}