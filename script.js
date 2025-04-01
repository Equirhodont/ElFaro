document.addEventListener("DOMContentLoaded", function() {
    let rows = document.querySelectorAll("table tr");
    rows.forEach((row, index) => {
        if (index > 0) {
            row.addEventListener("click", function() {
                alert("Has seleccionado: " + row.cells[0].innerText);
            });
        }
    });
});
