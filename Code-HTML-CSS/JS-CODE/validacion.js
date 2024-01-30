function validarFormulario() {
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var dni = document.getElementById("dni").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var contrasena = document.getElementById("contrasena").value;
    var confirmarContrasena = document.getElementById("confirmarContrasena").value;

    if (nombres.trim() === "" || apellidos.trim() === "" || dni.trim() === "" || fechaNacimiento.trim() === "" || contrasena.trim() === "" || confirmarContrasena.trim() === "") {
        alert("Todos los campos son obligatorios.");
        return false;
    }

    if (contrasena.length <= 8) {
        alert("La contraseña debe tener más de 8 caracteres.");
        return false;
    }

    if (contrasena !== confirmarContrasena) {
        alert("Las contraseñas no coinciden.");
        return false;
    }
    var fechaRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!fechaRegex.test(fechaNacimiento)) {
        alert("El formato de la fecha de nacimiento debe ser YYYY-MM-DD.");
        return false;
    }

    return true;
}
