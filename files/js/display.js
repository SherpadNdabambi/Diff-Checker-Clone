function shadeText() {
	let changedTextArray = changedText.innerHTML.split("<br>"), originalTextArray = originalText.innerHTML.split("<br>");
	let shortestText = changedTextArray.length <= originalTextArray.length ? changedTextArray : originalTextArray;
	let longestText = changedTextArray.length > originalTextArray.length ? changedTextArray : originalTextArray;
	let changedTextString  = '', originalTextString = '';

	for(let i = 0; i < shortestText.length; i++){
		if(shortestText[i] == longestText[i]){
			changedTextString += changedTextArray[i] + "<br>";
			originalTextString +=  originalTextArray[i] + "<br>";
		}
		else{
			changedTextArray[i] = changedTextArray[i].split(' ');
			originalTextArray[i] = originalTextArray[i].split(' ');
			let shortestSentence = changedTextArray[i].length <= originalTextArray[i].length ? changedTextArray[i] : originalTextArray[i];
			let longestSentence = changedTextArray[i].length > originalTextArray[i].length ? changedTextArray[i] : originalTextArray[i];
			changedTextString += "<div style='background-color:pink'>";
			originalTextString += "<div style='background-color:powderblue'>";
			for(let j = 0; j < shortestSentence.length; j++){
				if(shortestSentence[j] == longestSentence[j]){
					changedTextString += changedTextArray[i][j] + " ";
					originalTextString += originalTextArray[i][j] + " ";
				}
				else{
					changedTextString += "<span style='background-color:lightcoral'>" + changedTextArray[i][j] + " </span>";
					originalTextString += "<span style='background-color:mediumaquamarine'>" + originalTextArray[i][j] + " </span>";
				}
			}
			if(changedTextArray[i].length == longestSentence.length){
				changedTextString += "<span style='background-color:lightcoral'>";
				for(let j = shortestSentence.length; j < longestSentence.length; j++) changedTextString += longestSentence[j] + " ";
				changedTextString += "</span>";
			}
			else{
				originalTextString += "<span style='background-color:mediumaquamarine'>";
				for(let j = shortestSentence.length; j < longestSentence.length; j++) originalTextString += longestSentence[j] + " ";
				originalTextString += "</span>";
			}
			changedTextString += "</div><br>";
			originalTextString += "</div><br>";
		}
	}

	if(changedTextArray.length == longestText.length) for(let i = shortestText.length; i < longestText.length; i++) changedTextString += "<div style='background-color:pink'><span style='background-color:lightcoral'>" + longestText[i] + "</span></div><br>";
	else for(let i = shortestText.length; i < longestText.length; i++) originalTextString += "<div style='background-color:powderblue'><span style='background-color:mediumaquamarine'>" + longestText[i] + "</span></div><br>";

	changedText.innerHTML = changedTextString;
	originalText.innerHTML = originalTextString;
}

function onPageLoad() {
	//populate changed text
	let changedTextArray = localStorage.getItem("changedText").split(/\r?\n/);
	document.getElementById("changedText").innerHTML = '';
	for(let i = 0; i < changedTextArray.length; i++) document.getElementById("changedText").innerHTML += changedTextArray[i] + "<br>";

	//populate original text
	let originalTextArray = localStorage.getItem("originalText").split(/\r?\n/);
	document.getElementById("originalText").innerHTML = '';
	for(let i = 0; i < originalTextArray.length; i++) document.getElementById("originalText").innerHTML += originalTextArray[i] + "<br>";

	shadeText();
}