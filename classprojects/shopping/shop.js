addItemFunc = function() {
list = document.getElementById("groceryList");
listLi = document.createElement("li");
grocItem = document.getElementById("groceryItem").value;
liContents = createTextNode(grocItem);
listLi.appendChild(liContents);
list.appendChild(listLi);
}
