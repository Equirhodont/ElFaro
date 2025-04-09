document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos todos los artículos
    let articles = document.querySelectorAll(".articles-container article");

    // Evento para cambiar el fondo del artículo al pasar el mouse
    articles.forEach(article => {
        article.addEventListener("mouseenter", function() {
            this.style.backgroundColor = "#000";
            this.style.color = "#fff";
        });

        article.addEventListener("mouseleave", function() {
            this.style.backgroundColor = "#fff";
            this.style.color = "#000";
        });

        // Al hacer clic en un artículo, muestra un mensaje
        article.addEventListener("click", function() {
            alert("Has seleccionado: " + this.querySelector("h2").innerText);
        });
    });

    // Agregar animación al video cuando se reproduce
    let video = document.querySelector("video");
    if (video) {
        video.addEventListener("play", function() {
            this.style.border = "5px solid #c9d2d0";
            this.style.transition = "border 0.5s ease-in-out";
        });

        video.addEventListener("pause", function() {
            this.style.border = "none";
        });
    }
});
