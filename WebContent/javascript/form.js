function checkForm(event){
	var user = $("#user").val();
	var pswd = $("#pswd").val();
	var ok = true;
	$("#err_user").css("visibility", "hidden");
	$("#err_pswd").css("visibility", "hidden");
	if(user==""){
		$("#err_user").css("visibility", "visible");
		ok = false;
	}
	if(pswd==""){
		$("#err_pswd").css("visibility", "visible");
		ok = false;
	}
	if(!ok){
		event.preventDefault();
		return false;
	}
	return true;
}

function fieldValidation(event){
//	var spanId = "#err_"+$(this).attr("id");
//	$(spanId).toggle($(this).val() == "");
	
	if(this.value=="")
		$("#err_"+this.id).css("visibility", "visible");
	else
		$("#err_"+this.id).css("visibility", "hidden");
		
}

//window.onload=function(){
//	document.getElementById("idSubmit").onclick = checkForm;
//	document.getElementById("user").focus();
//}

//document.addEventListener("DOMContentLoaded", function(){
//	document.getElementById("idSubmit").addEventListener("click", checkForm, false);
//	document.getElementById("user").addEventListener("blur", fieldValidation, false);
//	document.getElementById("pswd").addEventListener("blur", fieldValidation, false);
//	document.getElementById("user").focus();
//}, false);

$(document).ready(function(){
	$("#user").focus();
//	$("#idSubmit").click(checkForm);
	$("form").submit(checkForm);
	$("#user, #pswd").blur(fieldValidation);
//	$("span[id^='err_']").hide();
});