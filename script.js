// ---- HACIENDO QUE ABRA LOS "A" EN NUEVA PESTAÑA ---- //
// Usando JavaScript, obtén todos los elementos <a> dentro del contenedor de tu portafolio
const links = document.querySelectorAll('a');

// Para cada enlace, agrega el atributo target="_blank"
links.forEach(enlace => {
    enlace.setAttribute('target', '_blank');
});


// ---- DESACTIVANDO ACCIONES SECUNDARIAS EN EL LOGO ---- //
// Usando JavaScript, selecciona la imagen por su ID
const deactivateSecondaryActions = document.getElementById('logo');

// Deshabilita el menú contextual en la imagen
deactivateSecondaryActions.addEventListener('contextmenu', event => {
    event.preventDefault();
});


// ---- AGREGANDO MARGEN A MAIN POR TAMAÑO DE NAVBAR ---- //
// Obtiene el elemento del navbar
const navbar = document.querySelector('nav');

// Obtiene la altura del navbar
const navbarHeight = navbar.clientHeight;

// Obtiene el elemento del contenido principal
const mainContent = document.querySelector('main');

// Aplica el margen superior al contenido principal
mainContent.style.marginTop = navbarHeight + 'px';




// CV SCRIPTS

// Primer botón de expansión de contenido
document.getElementById('button-expander-js-first').addEventListener('click', function () {
    // Selecciona el contenedor de la experiencia y cambia su max-height a none para expandirlo
    var experienciaContainer = document.getElementById('experience');
    experienciaContainer.style.maxHeight = 'none';

    // Selecciona y oculta el contenedor del botón
    var botonContenedor = document.getElementById('button-expander-container-first');
    botonContenedor.style.display = 'none';
});

// Segundo botón de expansión de contenido
document.getElementById('button-expander-js-second').addEventListener('click', function () {
    // Selecciona el contenedor de la experiencia y cambia su max-height a none para expandirlo
    var experienciaContainer = document.getElementById('projects');
    experienciaContainer.style.maxHeight = 'none';

    // Selecciona y oculta el contenedor del botón
    var botonContenedor = document.getElementById('button-expander-container-second');
    botonContenedor.style.display = 'none';
});