document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.querySelector("form");

    if (formulario) {
        formulario.addEventListener("submit", function (evento) {
            evento.preventDefault();

            alert("Mensagem enviada com sucesso!");

            formulario.reset();
        });
    }

    const imagens = document.querySelectorAll(".galeria img");

    imagens.forEach(function (imagem) {
        imagem.addEventListener("click", function () {
            imagem.classList.toggle("imagem-ampliada");
        });
    });

});