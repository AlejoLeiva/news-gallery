/** Tabs */
let link = document.getElementsByClassName('nav-link');
let valorActual = 1;

function activeLink() {
    for(l of link) {
        l.classList.remove('active');
    }
        event.target.classList.add('active');
        valorActual = e.target.value;
}

/** Paginacion */

/* Elementos Dinamicos */
const data = [
    { title: 'Musico', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: '/img/portfolio-2.jpg' },
    { title: 'Convenios', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: '/img/portfolio-3.jpg' },
    { title: 'Título 1', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: '/img/portfolio-4.jpg' },
    { title: 'Título 2', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: '/img/portfolio-5.jpg' },
    { title: 'Musico31', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: '/img/portfolio-6.jpg' },
    { title: 'Convenios544', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: '/img/portfolio-7.jpg' },
    { title: 'Título 142', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: '/img/portfolio-8.jpg' },
    { title: 'Título 63', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: '/img/portfolio-9.jpg' }
    { title: 'Musico78', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: '/img/portfolio-10.jpg' },
    { title: 'Convenios6', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: '/img/portfolio-12.jpg' },
    { title: 'Título 12', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: '/img/portfolio-14.jpg' },
    { title: 'Título 23', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: '/img/portfolio-6.jpg' }

];

const itemsPorPagina = 4;
let paginaActual = 1;


/* Funcion para Mostrar las Noticias Laterales Dinamicamente */
function displayItems(items, container) {
    container.innerHTML = ''; //Reiniciar dinamicamente los elementos hijos del contenedor
    items.forEach(item => { //Arreglo para mostrar las noticias laterales
        const col = document.createElement('div'); 
        col.classList.add('col-12', 'col-md-6', 'mb-3');
        col.innerHTML = `
            <div class="card card-custom">
                <div class="row no-gutters">
                    <div class="col-4 p-0">
                        <img src="${item.img}" class="card-img" alt="Imagen" />
                    </div>
                    <div class="col-8">
                        <div class="card-body">
                            <h5 class="card-title">${item.title}</h5>
                            <p class="card-text">${item.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

/* Funcion para configurar la paginación */
function setupPagination(items, container, paginationContainer) {
    paginationContainer.innerHTML = '';
    const pageCount = Math.ceil(items.length / itemsPorPagina); //Dividir el numero de elementos totales por el numero de elementos por pagina

    for (let i = 1; i <= pageCount; i++) {
        const li = document.createElement('li');
        li.classList.add('page-item');
        if (i === currentPage) {
            li.classList.add('active');
        }
        li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        li.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = i;
            updateDisplay();
        });
        paginationContainer.appendChild(li);
    }
}