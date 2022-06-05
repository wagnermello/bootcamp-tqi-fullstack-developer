const button = document.getElementById('mode-selector');
const h1 = document.getElementById('titulo');
const bg = document.getElementById('conteudo');


function changeMode() {
    changeClasses()
    changeText()

}

function changeClasses() {
    button.classList.toggle('mode__dark');
    bg.classList.toggle('conteudo__dark');
    h1.classList.toggle('titulo__dark')
}

function changeText() {
    if (button.classList.contains('mode__dark')) {
        button.innerHTML = "Trocar para Light Mode"
    } else {
        button.innerHTML = "Trocar para Dark Mode"
    }
    if (h1.classList.contains('titulo__dark')) {
        h1.innerHTML = "Dark Mode"
    } else {
        h1.innerHTML = "Light Mode"
    }
}


button.addEventListener('click', changeMode);

