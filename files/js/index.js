function onPageLoad() {
	//check local storage. Set to default text if empty
	if(!localStorage.getItem("changedText")) localStorage.setItem("changedText", "some changed text");
	if(!localStorage.getItem("originalText")) localStorage.setItem("originalText", "some original text");

	//populate changed text
	let changedTextArray = localStorage.getItem("changedText").split(/\r?\n/);
	document.getElementById("changedText").innerHTML = '';
	for(let i = 0; i < changedTextArray.length; i++) document.getElementById("changedText").innerHTML += changedTextArray[i] + "\n";

	//populate original text
	let originalTextArray = localStorage.getItem("originalText").split(/\r?\n/);
	document.getElementById("originalText").innerHTML = '';
	for(let i = 0; i < originalTextArray.length; i++) document.getElementById("originalText").innerHTML += originalTextArray[i] + "\n";

	resizeTextAreas();

	displayWindow = window.open(window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/')) + "/display.html", "displayWindow");
}

function onPageUnload(){
	displayWindow.close();
}

function resizeTextAreas() {
	numRows = (Math.max(document.getElementById("changedText").scrollHeight, document.getElementById("originalText").scrollHeight) - 19) / 15 + 1;
	document.getElementById("changedText").rows = numRows;
	document.getElementById("originalText").rows = numRows;
}

function checkDifference() {
	localStorage.setItem("changedText", document.getElementById("changedText").value);
	localStorage.setItem("originalText", document.getElementById("originalText").value);
	window.open(window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/')) + "/display.html", "displayWindow");
}