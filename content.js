// Content script that will access the current page's DOM
chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
	switch(message.type) {
		case "colors-div":
			var divs = document.querySelectorAll("div");
			if(divs.length === 0) {
				alert("There are no any divs in the page.");
			} else {
				for(var i=0; i<divs.length; i++) {
					divs[i].style.backgroundColor = message.color;
				}
			}
		break;
	}
  var btn = document.createElement("button");
  var text = document.createTextNode("Verify");
  btn.appendChild(text);
  document.body.appendChild(btn);
});
