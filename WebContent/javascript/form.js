function checkForm(event){
	var user = $("#user").val();
	var pswd = $("#pswd").val();
	var ok = true;
	$("span[id^='err_']").hide();
	
	$.each($("input"), function(index,value){
		var spanId = "#err_"+$(this).attr("id");
		$(spanId).toggle($(this).val() == "");
		ok = ok & ($(this).val() != "");
	});
	
	// methode gros bourrin
//	$("span[id^='err_']").each(function(){
//		$(this).toggle($("#"+$(this).attr('id').split("_")[1]).val() == "");	//correspond a $(#user) ou $(#pswd)
//		ok = ok & ($("#"+$(this).attr('id').split("_")[1]).val() != "");
//	});
	
	if(!ok){
		event.preventDefault();
		return false;
	}
	return true;
}

function fieldValidation(event){
	var spanId = "#err_"+$(this).attr("id");
	$(spanId).toggle($(this).val() == "");
	return !$(this).val() == "" ;
}

$(document).ready(function(){
	$("#user").focus();
	$("form").submit(checkForm);
	$("input").blur(fieldValidation);
	$("span[id^='err_']").hide();
});