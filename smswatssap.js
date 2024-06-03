var saludoDiv = document.getElementById("saludo");
var hora = new Date().getHours();

if (hora >= 5 && hora < 12) {
    saludoDiv.innerHTML = "<p>¡Hola! Buenos días</p>";
} else if (hora >= 12 && hora < 18) {
    saludoDiv.innerHTML = "<p>¡Hola! Buenas tardes</p>";
} else {
    saludoDiv.innerHTML = "<p>¡Hola! Buenas noches</p>";
}