$(function(){
	
	$("#Confirmationpasswordmessageselect").hide();
	$("#Confirmationpasswordmessageerror").hide();
	
	$("#Confirmationpassword").on("keyup",function(){
		if($("#password").val() !== $("#Confirmationpassword").val()){
			$("#Confirmationpasswordmessageselect").hide();
			$("#Confirmationpasswordmessageerror").show();
		} else if($("#password").val() === $("#Confirmationpassword").val()){
			$("#Confirmationpasswordmessageselect").show();
			$("#Confirmationpasswordmessageerror").hide();
		}
	});
});

