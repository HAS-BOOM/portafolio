const subtitulo = document.querySelector(".subtitulo");
if (subtitulo) {
    const textoOriginal = subtitulo.textContent;
    subtitulo.textContent = "";
    let i = 0;

    function escribirTexto() {
        if (i < textoOriginal.length) {
            subtitulo.textContent += textoOriginal.charAt(i);
            i++;
            setTimeout(escribirTexto, 45);
        }
    }
    escribirTexto();
}

const btnArriba = document.getElementById("btn-arriba");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnArriba.style.display = "block";
    } else {
        btnArriba.style.display = "none";
    }
});

if (btnArriba) {
    btnArriba.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

const musica = document.getElementById("musica-fondo");

if (musica) {
    musica.volume = 0.3;

    musica.play().catch(() => {
        document.addEventListener("click", () => {
            musica.play();
        }, { once: true });
    });
}