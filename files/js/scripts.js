function checkDifference() {
	sessionStorage.setItem("changedText", document.getElementById("changedText").innerHTML);
	sessionStorage.setItem("originalText", document.getElementById("originalText").innerHTML);
	let displayWindow = window.open("w3.com", "_blank");
	displayWindow.name = "new";
	sessionStorage.setItem("displayWindow", displayWindow);
}

function openNew(){
	window.open("wwe.com", "new")
}