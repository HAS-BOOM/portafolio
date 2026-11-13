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
const btnMusica = document.getElementById("btn-musica");

if (musica && btnMusica) {
    musica.volume = 0.3;

    btnMusica.addEventListener("click", () => {
        if (musica.paused) {
            musica.play();
            btnMusica.textContent = "⏸️";
        } else {
            musica.pause();
            btnMusica.textContent = "▶️";
        }
    });
}