function startSearch(codePostal){
	if(codePostal==null)
		$("#divVillesId").html("");
	var url = "http://192.168.1.16:8080/france/rest/villes/cp/" + codePostal;
	var listVilles = "<select>";
	$.getJSON(url, function(data){
		for(var ville in data){
			listVilles += "<option>"+data[ville].codePostal+" : "+data[ville].nom+"</option>";
		}
		$("#divVillesId").html(listVilles+"</select>");
	});
}

$(document).ready(function() {
	$("#cpId").keyup(function(){
		if($(this).val().length>1)
			startSearch($(this).val());
		else
			startSearch(null);
	});
	
//	$("#buttonId").click(function() {
//		var url = "http://192.168.1.16:8080/france/rest/villes/cp/" + $("#cpId").val();
//		var listVilles = "<select>";
//		$.getJSON(url, function(data){
//			for(var ville in data){
//				listVilles += "<option>"+data[ville].codePostal+" : "+data[ville].nom+"</option>";
//			}
//			$("#divVillesId").html(listVilles+"</select>");
//		});
//	});
});
