var pressBouton = 0;

$(document).ready(function() {
	$("#buttonId").click(function() {
		var url = "http://192.168.1.16:8080/france/rest/villes/cp/" + $("#cpId").val();
		var listVilles = "<select>";
		$.getJSON(url, function(data){
			for(var ville in data){
				listVilles += "<option>"+data[ville].codePostal+" : "+data[ville].nom+"</option>";
			}
			$("#divVillesId").html(listVilles+"</select>");
		});
	});
});
