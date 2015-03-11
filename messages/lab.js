function parse() {
	var myfile = new XMLHttpRequest();
	myfile.open("get", "http://messagehub.herokuapp.com/messages.json",true)

	myfile.onreadystatechange = function() {
		if(myfile.readyState == 4 && myfile.status == 200) {
			var arr = JSON.parse(myfile.responseText)
			var output = "";
  			var i;
    		for(i = 0; i < arr.length; i++) {
    		    output += '<p><span class="username">' + arr[i].username +
    		    '</span>: ' + arr[i].content + '</p>';
    		}
    		document.getElementById("messages").innerHTML = output;
    		//toUpdate = document.getElementById("content")
		}
	}
	myfile.send()
}

