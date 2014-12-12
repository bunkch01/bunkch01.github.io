addItemFunc = function() {
itemClass = document.getElementById("itemType").value;  
list = document.getElementById("groceryList");
listLi = document.createElement("li");
liCheck = document.createElement("input");
liCheck.setAttribute("type", "checkbox");
grocItem = document.getElementById("groceryItem").value;
liContents = document.createTextNode(grocItem);
liCheck.onclick = checkListFunc;
listLi.classList.add(itemClass);
listLi.appendChild(liCheck);
listLi.appendChild(liContents);
list.appendChild(listLi);
resetBox = document.getElementById("groceryItem");
resetBox.value = "";
}

checkListFunc = function() {
  if (this.checked) { this.parentNode.classList.add("done") }
  else if (this.checked) { this.parentNode.classlist.remove("done") }
}
