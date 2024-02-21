document.addEventListener('DOMContentLoaded', () => {

    //aca cargamos las horas disponibles en el select de HORAS
    const horaSelect = document.getElementById('time');
    for (let hora = 6; hora <= 18; hora += 2) {
        const option = document.createElement('option');
        option.value = hora;
        option.textContent = `${hora}:00`;
        horaSelect.appendChild(option);
    }

    //FALTA HACER QUE SALGAN LOS COPY DE ERROR DE ESTAS VALIDACIONES EN LOS CAMPOS 
    
    // Aca esta la validacion para los campos del formulario
    //primero declaramos la constante donde obtendremos la conexion con los campos
    //a travez de los ID.
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', (event) => {             //aca se toma con la accion submit, es decir al enviar el formulario
        const nombres = document.getElementById('name').value;
        const apellidos = document.getElementById('lastname').value;
        const cedula = document.getElementById('identification').value;
        const celular = document.getElementById('phone').value;
        const correo = document.getElementById('email').value;

        //Una vez obtenido los datos de los campos, procedemos a realizar las validacions de los datos
        // Validación de nombres y apellidos, para no acepte caracteres especiales ni numeros, solo letras, acentos y Ñ
        const regexNombresApellidos = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/;
        if (!regexNombresApellidos.test(nombres) || !regexNombresApellidos.test(apellidos)) {
            alert('Los nombres y apellidos deben contener solo letras y acentos.');
            event.preventDefault();
            return;
        }

        // Validación de cédula, para que solo acepte numeros, para colombia las cedulas tienen una extension minima
        //de 7 digitos y maxima de 10 digitos.
        const regexCedula = /^[0-9]{7,10}$/;
        if (!regexCedula.test(cedula)) {
            alert('La cédula debe contener entre 7 y 10 dígitos numéricos.');
            event.preventDefault();
            return;
        }

        // Validación de celular, en colombia los numero de ceulares tiene una extension igual a 10 digitos
        const regexCelular = /^[0-9]{10}$/;
        if (!regexCelular.test(celular)) {
            alert('El número de celular debe tener exactamente 10 dígitos numéricos.');
            event.preventDefault();
            return;
        }

        // Validación de correo electrónico, aca está la expresion regular comun para correos electronicos
        const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regexCorreo.test(correo)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            event.preventDefault();
            return;
        }

        //En esta validacion es para veridicar que los campos no se envien vacios por ningun motivo
        if (!nombres || !apellidos || !cedula || !celular || !correo) {
            alert('Por favor, complete todos los campos obligatorios.');
            event.preventDefault();
        }
    });
});

