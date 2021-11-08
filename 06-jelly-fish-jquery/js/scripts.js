$(document).ready(function(){
    
    console.log("DOM is loaded.");

    $("#hide").click(function(){
        $("#info").hide(200);
    });

    $("#show").click(function(){
        $("#info").show(200);
    });

    $("#toggle").click(function(){
        $("#info").toggle(200);
    });

    // you can also make any button to select the #info by using "button" instead,

    // $("button").click(function(){
    //     $("#info").toggle(200);
    // });

});