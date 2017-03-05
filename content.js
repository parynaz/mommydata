// Content script that will access the current page's DOM
var btn = document.createElement("button");
  var text = document.createTextNode("Verify");
  btn.appendChild(text);


chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
	switch(message.type) {
		case "colors-div":
			var divs = document.querySelectorAll(".g");
			if(divs.length === 0) {
				alert("There are no any divs in the page.");
			} else {
				for(var i=0; i<divs.length; i++) {
					divs[i].style.backgroundColor = message.color;
					var newEl = document.createElement('btn');

					newEl.textContent="check quality";
					newEl.style.backgroundColor = "#008CBA";
					newEl.style.textAlign = "center";
					newEl.style.color = "#FFFFFF";
					newEl.addEventListener("click", function(){
						alert("I'm clicked!");
					}, false);
					divs[i].insertBefore(newEl, divs[i].childNodes[0]);

				}
        var buttons = document.querySelectorAll("btn");
        for(var i=0; i<buttons.length; i++) {
          buttons[i].style.position="absolute";
          buttons[i].style.left="-110px";
        }

			}
		break;


	}

});
