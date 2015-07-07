function getXMLHttpRequest() {
	if (window.XMLHttpRequest)
		return new XMLHttpRequest();
	if (window.ActiveXObject) {
		var xhr = new ActiveXObject("Msxml2.XMLHTTP");
		if (xhr != null)
			return xhr;
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}

function query(xhr, urlGetString) {
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			var obj = eval("(" + xhr.responseText + ")");
			setInput(obj);
		}
	}
	xhr.open("GET", urlGetString, true);
	xhr.send();
}

function setInput(obj) {
	var text = "<ul>";
	for ( var i in obj) {
		text += "<li>" + obj[i].nom + " " + obj[i].prenom + "</li>";
	}
	document.getElementById("idContacts").innerHTML = text + "</ul>";
}

window.onload = function() {
	var xhr = getXMLHttpRequest();
	var url = "contacts.json";
	query(xhr, url);
}