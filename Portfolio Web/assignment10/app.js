var list = document.getElementById('list');

function addItem(){
    var item = document.getElementById('todo-item');

    var li = document.createElement("li");
    
    var li_item = document.createTextNode(item.value);
    li.appendChild(li_item);

    var span = document.createElement('span');
    span.setAttribute('class','span-2')

    var del_btn = document.createElement("button");
    var del_Text = document.createTextNode("Delete");
    del_btn.appendChild(del_Text);
    del_btn.setAttribute("class",'del-btn');
    del_btn.setAttribute("onclick",'delItem(this)')
    span.appendChild(del_btn);

    var edit_btn = document.createElement("button");
    var edit_Text = document.createTextNode("Edit");
    edit_btn.appendChild(edit_Text);
    edit_btn.setAttribute('onclick','edit_item(this)')
    edit_btn.setAttribute("class",'edit-btn');
    span.appendChild(edit_btn);

    li.appendChild(span);

    var hr = document.createElement('hr');
    li.appendChild(hr);

    list.appendChild(li);

    item.value ="";
}

function delAll(){
    list.innerHTML = '';
}

function delItem(e){
    e.parentNode.parentNode.remove();
}

function edit_item(e){
    var editValue = prompt("Enter Edit Value",e.parentNode.parentNode.firstChild.nodeValue);
    e.parentNode.parentNode.firstChild.nodeValue = editValue;
}