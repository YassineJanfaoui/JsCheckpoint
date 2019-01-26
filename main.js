function makeBold(){
	document.querySelector("#paragraph").style.fontWeight= "bold"
}
function makeItalic(){
	document.querySelector("#paragraph").style.fontStyle= "italic"
}
function makeUnderlined(){
	document.querySelector("#paragraph").style.textDecoration= "underLine"
}
function changeFontFamily(){
	var font = document.querySelector("#fontFamily").value;
	document.querySelector("#paragraph").style.fontFamily=font;
}
function changeFontSize(){
	var size=document.querySelector("#fontSize").value;
	document.querySelector("#paragraph").style.fontSize=size;
}
