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
			// var obj = eval("("+xhr.responseText+")");
			var text = xhr.responseText;
			setInput(text);
		}
	}
	xhr.open("GET", urlGetString, true);
	xhr.send();
}

function setInput(text) {
	var contacts = text.split("\n");
	var list = "<ul>";
	for ( var i in contacts) {
		var c = contacts[i].split(";");
		list += "<li>" + c[0] + " " + c[1] + "</li>";
	}
	document.getElementById("idContacts").innerHTML = list + "</ul>";
}
window.onload = function() {
	var xhr = getXMLHttpRequest();
	var url = "contacts.txt";
	query(xhr, url);
}