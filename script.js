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
const cartas = document.querySelectorAll("section:not(#mis_intereses) .card-inner");
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

const tarjetasActividad = document.querySelectorAll(".tarjeta-actividad");
tarjetasActividad.forEach(tarjeta => {
    tarjeta.addEventListener("click", () => {
        tarjeta.classList.toggle("activa");
    });
});

const visorZoom = document.getElementById("visor-zoom");
const imagenAmpliada = document.getElementById("imagen-ampliada");
const cerrarZoom = document.getElementById("cerrar-zoom");
const fotosActividad = document.querySelectorAll(".foto-actividad");

if (visorZoom && imagenAmpliada) {
    fotosActividad.forEach(foto => {
        foto.addEventListener("click", (e) => {
            e.stopPropagation();
            if (!foto.getAttribute("src")) return;
            imagenAmpliada.src = foto.src;
            visorZoom.style.display = "flex";
        });
    });
    visorZoom.addEventListener("click", () => {
        visorZoom.style.display = "none";
    });
}

const cartaJuegos = document.getElementById("carta-juegos");
if (cartaJuegos) {
    const portadaJuegos = cartaJuegos.querySelector(".card-front");
    let golpes = 0;

    portadaJuegos.addEventListener("click", (e) => {
        e.stopPropagation();
        golpes++;
        portadaJuegos.classList.add("golpe-minecraft");
        setTimeout(() => portadaJuegos.classList.remove("golpe-minecraft"), 250);

        if (golpes >= 5) {
            portadaJuegos.classList.add("muerte-minecraft");
        }
    });

    // Si tocas el contenido revelado, la portada reaparece para volver a jugar
    cartaJuegos.querySelector(".card-back").addEventListener("click", () => {
        portadaJuegos.classList.remove("muerte-minecraft");
        golpes = 0;
    });
}

const cartaPeliculas = document.getElementById("carta-peliculas");
if (cartaPeliculas) {
    const portadaPeliculas = cartaPeliculas.querySelector(".card-front");

    portadaPeliculas.addEventListener("click", (e) => {
        e.stopPropagation();
        portadaPeliculas.classList.add("chasquido-marvel");
    });

    cartaPeliculas.querySelector(".card-back").addEventListener("click", () => {
        portadaPeliculas.classList.remove("chasquido-marvel");
    });
}

const cartaLibros = document.getElementById("carta-libros");
if (cartaLibros) {
    const portadaLibros = cartaLibros.querySelector(".card-front");

    portadaLibros.addEventListener("click", (e) => {
        e.stopPropagation();
        portadaLibros.classList.add("abrir-libro");
    });

    cartaLibros.querySelector(".card-back").addEventListener("click", () => {
        portadaLibros.classList.remove("abrir-libro");
    });
}

const cartaIA = document.getElementById("carta-ia");
if (cartaIA) {
    const portadaIA = cartaIA.querySelector(".card-front");
    let hackeando = false;

    portadaIA.addEventListener("click", (e) => {
        e.stopPropagation();
        if (hackeando) return;
        hackeando = true;
        portadaIA.classList.add("modo-ia");

        const titulos = portadaIA.querySelectorAll("h2, p");
        const textosOriginales = Array.from(titulos).map(t => t.textContent);
        const caracteres = "01#$%&@*?<>";

        const intervalo = setInterval(() => {
            titulos.forEach((el, index) => {
                el.textContent = textosOriginales[index]
                    .split("")
                    .map(letra => letra === " " ? " " : caracteres[Math.floor(Math.random() * caracteres.length)])
                    .join("");
            });
        }, 65);

        setTimeout(() => {
            clearInterval(intervalo);
            titulos.forEach((el, index) => {
                el.textContent = textosOriginales[index];
            });
            portadaIA.classList.remove("modo-ia");
            portadaIA.classList.add("ia-revelada");
            hackeando = false;
        }, 1500);
    });

    cartaIA.querySelector(".card-back").addEventListener("click", () => {
        portadaIA.classList.remove("ia-revelada");
    });
}