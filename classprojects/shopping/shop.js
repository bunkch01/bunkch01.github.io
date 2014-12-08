addItemFunc = function() {
list = document.getElementById("groceryList");
listLi = document.createElement("li");
grocItem = document.getElementById("groceryItem").value;
liContents = document.createTextNode(grocItem);
listLi.appendChild(liContents);
list.appendChild(listLi);
}
