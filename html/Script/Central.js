function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
	document.getElementById("dd_img").style.opacity = "0.24";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
	document.getElementById("dd_img").style.opacity = "1";
}

function openNavi() {
    document.getElementById("div_navi").style.display = "block";
	document.getElementById("naviOverlay").style.display = "block";
	document.getElementById("dd_img").style.opacity = "0.24";
	document.getElementById("div_navi").style.opacity = "1";
	document.getElementById("naviOverlay").style.opacity = "1";
	langBoardGen()
}

function closeNavi() {
    document.getElementById("div_navi").style.display = "none";
	document.getElementById("naviOverlay").style.display = "none";
	document.getElementById("dd_img").style.opacity = "1";
	document.getElementById("div_navi").style.opacity = "0";
	document.getElementById("naviOverlay").style.opacity = "0";
	document.getElementById("langDisp").style.display = "none";
	document.getElementById("timeAptitude").style.display = "initial";
}

function displayLang(){
	    document.getElementById("langDisp").style.display = "block";
		document.getElementById("timeAptitude").style.display = "none";
		document.getElementById("dd_img").style.opacity = "0.1";
}

function closeLang(){
	    document.getElementById("langDisp").style.display = "none";
		document.getElementById("langInfoDisp").style.display = "none";
		document.getElementById("timeAptitude").style.display = "initial";
		document.getElementById("dd_img").style.display = "0.24";
}

function displayInfoLang(){
	    document.getElementById("langInfoDisp").style.display = "block";
		document.getElementById("langDisp").style.display = "none";
}

function switchLang(){
	    document.getElementById("langInfoDisp").style.display = "none";
		document.getElementById("langDisp").style.display = "block";
}

function closeInfoLang(){
	    document.getElementById("langInfoDisp").style.display = "none";
		document.getElementById("langDisp").style.display = "none";
		document.getElementById("timeAptitude").style.display = "initial";
		document.getElementById("dd_img").style.display = "0.24";
}