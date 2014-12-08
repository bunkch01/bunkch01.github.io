addItemFunc = function() {
list = document.getElementById("groceryList");
listLi = document.createElement("li");
grocItem = document.getElementById("groceryItem").value;
liContents = createTextNode(grocitem);
listLi.appendChild(liContents);
list.appendChild(listLi);
}
