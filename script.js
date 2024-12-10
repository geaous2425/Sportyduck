
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.buy-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Gracias por tu compra 🎉');
        });
    });
    function performSearch() {
    const query = document.getElementById("search-bar").value;
    if (query) {
        document.getElementById("search-results").innerHTML = `Resultados para: <strong>${query}</strong>`;
    } else {
        document.getElementById("search-results").innerHTML = "Por favor, introduce un término de búsqueda.";
    }
}

});
