addItemFunc = function() {
itemClass = document.getElementById("itemType").value;  
list = document.getElementById("groceryList");
listLi = document.createElement("li");
liCheck = document.createElement("input");
liCheck.setAttribute("type", "checkbox");
grocItem = document.getElementById("groceryItem").value;
liContents = document.createTextNode(grocItem);
listLi.classList.add(itemClass);
listLi.appendChild(liCheck);
listLi.appendChild(liContents);
list.appendChild(listLi);
resetBox = document.getElementById("groceryItem");
resetBox.value = "";
}
