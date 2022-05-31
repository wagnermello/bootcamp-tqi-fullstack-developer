const add = document.getElementById('adicionar');
const lista = document.getElementById('saida');


add.addEventListener('click', function () {
    const inputValue = document.getElementById('addText');
    if (inputValue.value === '') {
        alert('Você deve escrever uma tarefa!');
    } else {
        newElement(inputValue.value);
    }
});

function newElement(listaInfo) {
    const list = document.createElement('li');
    const checkbox = document.createElement('input');
    const checkboxLabel = document.createElement('label');
    const addText = document.createTextNode(listaInfo);
    const btn = document.createElement('button');
    const btnText = document.createTextNode('X');

    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', listaInfo);
    checkbox.setAttribute('id', listaInfo);

    checkboxLabel.setAttribute('for', listaInfo);
    checkboxLabel.appendChild(addText);

    btn.classList.add('close');
    btn.appendChild(btnText);

    list.classList.add('list-item');
    list.appendChild(checkbox);
    list.appendChild(checkboxLabel);
    list.appendChild(btn);

    lista.appendChild(list);

    //Create button delete/close

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.parentNode.removeChild(div);
        };
    }
}

// Click on a close button to delete the current list item
var close = document.getElementsByClassName('close');
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.parentNode.removeChild(div);
    };
}