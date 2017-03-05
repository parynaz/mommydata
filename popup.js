function clicked(){
	document.getElementById("title").textContent = "Bye";
}

window.onload=function(){
  document.getElementById("click-btn").onclick= clicked;
}
window.onload = function() {
	document.getElementById("count-div").onclick = function() {
		chrome.extension.sendMessage({
	        type: "color-divs"
	    });
	}
}
