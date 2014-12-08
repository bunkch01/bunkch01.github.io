addItemFunc = function() {
list = document.getElementById("groceryList");
listLi = document.createElement("li");
liCheck = document.createElement("input");
liCheck.setAttribute("type", "checkbox");
grocItem = document.getElementById("groceryItem").value;
liContents = document.createTextNode(grocItem);
listLi.appendChild(liContents);
list.appendChild(liCheck);
list.appendChild(listLi);
}
