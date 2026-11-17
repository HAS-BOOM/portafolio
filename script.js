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

const cartas = document.querySelectorAll(".card-inner");
cartas.forEach(carta => {
    carta.addEventListener("click", () => {
        if (carta.style.transform === "rotateY(180deg)") {
            carta.style.transform = "rotateY(0deg)";
        } else {
            carta.style.transform = "rotateY(180deg)";
        }
    });
});

const btnArriba = document.getElementById("btn-arriba");

window.addEventListener("scroll", () => {
    if (btnArriba) {
        if (window.scrollY > 300) {
            btnArriba.style.display = "block";
        } else {
            btnArriba.style.display = "none";
        }
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

    btnMusica.addEventListener("click", (e) => {
        e.stopPropagation();

        if (musica.paused) {
            musica.play()
                .then(() => {
                    btnMusica.textContent = "⏸️";
                })
                .catch((error) => {
                    console.error("Error al reproducir el audio:", error);
                });
        } else {
            musica.pause();
            btnMusica.textContent = "▶️";
        }
    });
}