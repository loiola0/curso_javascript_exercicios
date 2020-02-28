var elemtList = document.querySelector('#app ul');
var inputList = document.querySelector('#app input');
var buttonList = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    elemtList.innerHTML='';
    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        var linkTodo = document.createElement('a');
        var linkExcluir = document.createTextNode('Excluir');
            linkTodo.setAttribute("href","#");
        
        var pos = todos.indexOf(todo);
            linkTodo.setAttribute("onclick","apagarTodo("+pos+")");
        todoElement.appendChild(todoText);
        elemtList.appendChild(todoElement);
        todoElement.appendChild(linkTodo);
        linkTodo.appendChild(linkExcluir);
    }
}
    renderTodos();


function adicionarTodos(){
    var todoText = inputList.value;

    todos.push(todoText);
    renderTodos();
    saveToStorage();
}

buttonList.onclick = adicionarTodos;

function apagarTodo(pos){
    todos.splice(pos,1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos',JSON.stringify(todos));
}