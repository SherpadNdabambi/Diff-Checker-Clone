function onPageLoad() {
	window.open("Display.html", "displayWindow");
}

function resizeTextAreas() {
	numRows = (Math.max(document.getElementById("changedText").scrollHeight, document.getElementById("originalText").scrollHeight) - 19) / 15 + 1;
	document.getElementById("changedText").rows = numRows;
	document.getElementById("originalText").rows = numRows;
}

function checkDifference() {
	localStorage.setItem("changedText", document.getElementById("changedText").value);
	localStorage.setItem("originalText", document.getElementById("originalText").value);
	window.open("Display.html", "displayWindow");
}