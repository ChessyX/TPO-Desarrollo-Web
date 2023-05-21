function validarFormularioReserva(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var telefono = document.getElementById('telefono').value;
    var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Nombre
    if (nombre.trim() === '') {
        alert('Por favor, ingresa tu nombre.');
        return;
    }
    if (!esNombreValido(nombre)) {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    if (nombre.endsWith(' ')) {
        alert('El nombre no debe terminar con un espacio en blanco.');
        return;
    }

    // Correo
    if (correo.trim() === '') {
        alert('Por favor, ingresa tu correo electrónico.');
        return;
    } else if (!correoRegex.test(correo)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    // Telefono
    if (telefono.trim() === '') {
        alert('Por favor, ingresa tu número de teléfono.');
        return;
    }
    if (!esTelefonoValido(telefono)) {
        alert('Por favor, ingresa un número de teléfono válido.');
        return;
    }

    alert('¡Reserva realizada con éxito!');
    var form = document.getElementById('formulario');
    form.submit();
}

function esNombreValido(nombre) {
    var nombreRegex = /^[a-zA-Z\s]+$/;
    return nombreRegex.test(nombre);
}

function esTelefonoValido(telefono) {
    var telefonoRegex = /^\d{10}$/;
    return telefonoRegex.test(telefono);
}