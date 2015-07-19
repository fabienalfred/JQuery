$(":text,:password").live('validation',function(){
	var val = $.trim($(this).val());
	var errorMessage=[];
	if($(this).hasClass('required') && val=="")
		errorMessage.push("Champ obligatoire");
	
	var isOk = errorMessage.length==0;
	var msg;
	if(!isOk)
		msg = "<div class='error'>"+errorMessage.join('<br/>')+"</div>";
	if($(this).next().is("div.error"))
		$(this).next().remove();
	
	$(this).after(msg);
	$(this).data("isValid",isOk);
});