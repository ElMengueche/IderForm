document.addEventListener('DOMContentLoaded', () => {
    // Lógica para inhabilitar fechas y horas ya reservadas
    // ...

    // Lógica para cargar las horas disponibles en el select
    const horaSelect = document.getElementById('hora');
    for (let hora = 6; hora <= 18; hora += 2) {
        const option = document.createElement('option');
        option.value = hora;
        option.textContent = `${hora}:00`;
        horaSelect.appendChild(option);
    }

    // Lógica para validar los campos
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', (event) => {
        const nombres = document.getElementById('nombres').value;
        const apellidos = document.getElementById('apellidos').value;
        const cedula = document.getElementById('cedula').value;
        const celular = document.getElementById('celular').value;
        const correo = document.getElementById('correo').value;

        // Validaciones adicionales aquí (expresiones regulares, etc.)

        if (!nombres || !apellidos || !cedula || !celular || !correo) {
            alert('Por favor, complete todos los campos obligatorios.');
            event.preventDefault();
        }
    });
});
