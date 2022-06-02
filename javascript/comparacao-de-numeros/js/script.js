const botaoComparar = document.querySelector("#send");

botaoComparar.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector('#numero1')
    let n1 = Number(numero1.value);

    document.querySelector('#numero2')
    let n2 = Number(numero2.value);


    let output = document.querySelector('.resultado')

    let soma = n1 + n2;




    function comparaNumero() {
        if (n1 === n2) {
            return (`Os números ${n1} e ${n2} são iguais.`);
        } else {
            return (`Os números ${n1} e ${n2} não são iguais.`);
        }
    }


    function somaNumero() {
        return (`Sua soma é ${soma},`)
    }

    function comparaDez() {
        if (soma < 10) {
            return ("que é menor que 10")
        } else {
            return ("que é maior que 10")
        }
    }

    function comparaVinte() {
        if (soma < 20) {
            return ("e menor que 20.")
        } else {
            return ("e maior que 20.")
        }
    }


    if (!n1 || !n2) {
        output.innerText = "Operação inválida. Somente números são permitidos."
    } else {


        output.innerText = `${comparaNumero()} ${somaNumero()} ${comparaDez()} ${comparaVinte()}`
    }



})
