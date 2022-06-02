const botaoVerificar = document.querySelector("#send");

botaoVerificar.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector('#palavra')
    let palavraDigitada = (palavra.value);


    let output = document.querySelector('.resultado')


    function verificaPalindromo() {

        return palavraDigitada.split("").reverse().join("").toUpperCase() === palavraDigitada.toUpperCase();

    }


    if (verificaPalindromo() === true) {
        output.innerText = `A palavra ${palavraDigitada} é um palíndromo.`
    } else {
        output.innerText = `A palavra ${palavraDigitada} não é um palíndromo.`
    }

})
