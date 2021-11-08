$(document).ready(function(){

	$.validator.setDefaults({
		submitHandler: function() {
			alert("Thank you for signing up!");
		}
	});

    $("#frog").validate();

    $("#agree").click(function(){
        $("#signup").attr("disabled", false)
    });

})


