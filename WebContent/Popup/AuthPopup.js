$(document).ready(function(){

var AuthPopup = {
		
	create: function(){
		var html=[];
		var i=0;
		html[i++] = "<div id='authPopup'>";
		html[i++] = "<form>";
		html[i++] = "<div id='header'>Identifiez-vous<div id='cmdCancel'>x</div></div>";
		html[i++] = "<div id='body'>";
		html[i++] = "<div><label for='user'>User </label>";
		html[i++] = "<input type='text' id='user' class='required'/></div>";
		html[i++] = "<div><label for='pswd'>Password </label>";
		html[i++] = "<input type='password' id='pswd' class='required'/></div>";
		html[i++] = "<div><input type='submit' id='cmdSend' value='Ok'/></div>";
		html[i++] = "</form>";
		html[i++] = "</div>";
		
		$('body').append(html.join(""));
		$('body').append("<div id='overlay'></div>");
	},
	
	addEvents: function(){
		$(":text, :password").live("blur",function(){
			$(this).trigger("validation");
		});
		$("#cmdCancel").click($.proxy(this.hide,AuthPopup));
		$("#authPoppup").children("form").submit(
				{"popup":this},
				function(event){
					if($('#user').val()()=="" || $('#pswd').val()==""){
						alert("Formulaire incomplet");
					}
					else{
						event.data.popup.sendToServer();
						event.data.popup.hide();
					}
					return false;	
		});
	},
	
	show: function(){
		if($("#authPopup").size()==0){
			this.create();
			this.addEvents();
		}
		
		var top = $(window).scrollTop()+($(window).height() - $('#authPopup').height())/2;
		var left = $(window).scrollLeft()+($(window).height() - $('#authPopup').height())/2;
		
		$("#authPopup")
			.css('top',Math.max(0,top))
			.css('left',Mathmax(0,left))
			.slideDown('slow')
		.find(':text,textarea').first().focus();
		
		$("#overlay").fadeIn();
	},
	
	sendToServer: function(){
		$.ajax({
			'url':'authentification',
			'type':'POST',
			'context':this,
			'data':{
				'user':$("#user").val(),
				'pswd':$("#pswd").val()
			},
			'success':function(){
				console.log("envoi reussi");
			}
		})
	},
	
	hide: function(){
		$("#authPopup").slideUp('slow',function(){
			$("#overlay").fadeOut();
		});
	}
	
};
AuthPopup.show();

});