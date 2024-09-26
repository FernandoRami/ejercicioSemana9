const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $name = document.querySelector('.name'); // Cambié 'name' a '.name'
const $blog = document.querySelector('.blog'); // Cambié 'blog' a '.blog'
const $location = document.querySelector('.location'); // Añadí la selección para la ubicación

async function displayUser(username) {
    $name.textContent = 'Cargando...';

    try {
        const response = await fetch(`${usersEndpoint}/${username}`);
        if (!response.ok) throw new Error('Error en la red');

        const data = await response.json(); //JSON
        console.log(data); //

        $name.textContent = data.name || 'No disponible';
        $blog.textContent = data.blog || 'No disponible';
        $location.textContent = data.location || 'No disponible';
    } catch (err) {
        handleError(err); // Manejo de errores
    }
}

function handleError(err) {
    console.log('OH NO!');
    console.log(err);
    $name.textContent = `Algo salió mal: ${err.message}`; // Mostrar mensaje de error específico
}


displayUser('stolinski');//elimine el cath por que metio en la funcion
