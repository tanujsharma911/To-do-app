function addList() {
  let listContainer = document.getElementById("list");
  let work = document.getElementById("work");

  let li = document.createElement("li");

  let randomVar = Math.trunc(Math.random() * 1000 + 2);
  li.innerHTML = `<input type="checkbox" id="${randomVar}"> 
                  <label for="${randomVar}">${work.value}</label>
                  <button class="deleteListBtn" onclick="deleteList(this)"><span class="material-symbols-outlined closeIcon">close</span></button>`;

  listContainer.append(li);

  work.value = "";
}
function deleteList(a){
    a.parentElement.remove();
}