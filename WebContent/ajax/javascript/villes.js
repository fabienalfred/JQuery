antislashn = {};

antislashn.getVilles = function(cp,callbackFunction){
	var url = "http://192.168.1.16:8080/france/rest/villes/cp/"+cp;	
	$.getJSON(url,function(data){
		callbackFunction(data);
	});
};

function afficherVilles(data){
	var text = "<select size='5'>";
	$.each(data,function(index,ville){
		text+="<option value='"+ville.id+"' data-cp='"+ville.codePostal+"'>"+ville.nom+" - "+ville.codePostal+"</option>";
	});
	text+="</select>";
	$("#villes").html(text);
}

$(function(){
	$("#search").click(function(){
		antislashn.getVilles($("#cp").val(),afficherVilles);
	});
});