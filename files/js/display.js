function shadeText() {
	let changedTextArray = changedText.innerHTML.split("<br>"), originalTextArray = originalText.innerHTML.split("<br>");
	let shortestText = changedTextArray.length <= originalTextArray.length ? changedTextArray : originalTextArray;
	let longestText = changedTextArray.length > originalTextArray.length ? changedTextArray : originalTextArray;

	changedText.innerHTML = '';
	originalText.innerHTML = '';
	for(let i = 0; i < shortestText.length; i++){
		if(shortestText[i] == longestText[i]){
			changedText.innerHTML += changedTextArray[i] + "<br>";
			originalText.innerHTML +=  originalTextArray[i] + "<br>";
		}
		else{
			changedTextArray[i] = changedTextArray[i].split(' ');
			originalTextArray[i] = originalTextArray[i].split(' ');
			let shortestSentence = changedTextArray[i].length <= originalTextArray[i].length ? changedTextArray[i] : originalTextArray[i];
			let longestSentence = changedTextArray[i].length > originalTextArray[i].length ? changedTextArray[i] : originalTextArray[i];
			//changedText.innerHTML += "<div style='background-color:pink'>";
			//originalText.innerHTML += "<div style='background-color:powderblue'>";
			for(let j = 0; j < shortestSentence.length; j++){
				if(shortestSentence[j] == longestSentence[j]){
					changedText.innerHTML += "<span style='background-color:pink'>" + changedTextArray[i][j] + " </span>";
					originalText.innerHTML += "<span style='background-color:powderblue'>" + originalTextArray[i][j] + " </span>";
				}
				else{
					changedText.innerHTML += "<span style='background-color:lightcoral'>" + changedTextArray[i][j] + " </span>";
					originalText.innerHTML += "<span style='background-color:mediumaquamarine'>" + originalTextArray[i][j] + " </span>";
				}
			}
			let long = changedTextArray[i].length == longestSentence.length ? changedText : originalText;
			//long.innerHTML += "<span style='background-color:pink'>";
			for(let j = shortestSentence.length; j < longestSentence.length; j++){
				if(long == changedText) long.innerHTML += "<span style='background-color:pink'>" + longestSentence[j] + " </span>";
				else long.innerHTML += "<span style='background-color:powderblue'>" + longestSentence[j] + " </span>";
			}
			//long.innerHTML += "</span>";
			//changedText.innerHTML += "</div><br>";
			//originalText.innerHTML += "</div><br>";
			changedText.innerHTML += "<br>";
			originalText.innerHTML += "<br>";
		}
	}
	let long = changedTextArray.length == longestText.length ? changedText : originalText;
	for(let i = shortestText.length; i < longestText.length; i++) long.innerHTML += longestText[i] + "<br>";
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