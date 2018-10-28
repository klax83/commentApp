function post() {
	var un = document.getElementById('username').value;
	var op = document.getElementById('comment').value;

	// console.log(un);
	// console.log(op)

	var unText = "Username: " + un;
	var opText = "Comment: " + op;

	console.log(unText);
	console.log(opText);

	var listItem = document.createElement("li");
	listItem.className = "list-group-item";
	var postUn = document.createElement("h3");
	postUn.textContent = unText;
	var postCom = document.createElement("p");
	postCom.textContent = opText;

	listItem.appendChild(postUn);
	listItem.appendChild(postCom);
	document.getElementById("comList").appendChild(listItem)


}