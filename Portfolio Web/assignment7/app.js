function getNumber(num){
    var input = document.getElementById("input");
    input.value = input.value +num;
}

function backspace(){
    var input = document.getElementById("input");
    var res = input.value.slice(0, -1); 
    input.value = res;
}

function empty(){
    var input = document.getElementById("input");
    input.value = '';
}

count = 0;
function result(){

    count = count+1;

    var input = document.getElementById("input");

    if(input.value[input.value.length-1]=='+' || input.value[0]=='+'){alert("Please enter full equation")}
    else if(input.value[input.value.length-1]=='-' || input.value[0]=='-'){alert("Please enter full equation")}
    else if(input.value[input.value.length-1]=='/' || input.value[0]=='/'){alert("Please enter full equation")}
    else if(input.value[input.value.length-1]=='*' || input.value[0]=='*'){alert("Please enter full equation")}

    var ul = document.getElementById("List");
    var li = document.createElement("li");

    var value = input.value;
    li.appendChild(document.createTextNode(count+") "+value));

    ev = eval(input.value);
    input.value = ev;

    li.setAttribute("id", "eq");
    ul.appendChild(li);

    var li = document.createElement("li");
    li.appendChild(document.createTextNode("= "+ev.toFixed(2)));
    li.setAttribute("id", "ans");
    ul.appendChild(li);

    var hr = document.createElement('hr');
    ul.append(hr);
}

