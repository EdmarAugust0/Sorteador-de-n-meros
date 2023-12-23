document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numeroMaximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
                        //    Math.ceil >> arredondar para cima
                        //    Math.floor >> arredondar para baixo 
                        //    Math.random >> para arredondar dependendo do numero dps do ponto
        numeroAleatorio = Math.ceil(numeroAleatorio)

        document.getElementById('resultadoValor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})