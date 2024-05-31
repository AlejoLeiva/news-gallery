/** Paginacion */

/* Elementos Dinamicos */
const data = [
    { title: 'Musico', text: 'Lorem ipsum dolor sit amet consectetur elit.', img: '/img/portfolio-2.jpg'},
    { title: 'Convenios', text: 'Lorem ipsum dolor sit amet consectetur elit.', img: '/img/portfolio-3.jpg'},
    { title: 'Independencia', text: 'Lorem ipsum dolor sit amet consectetur elit.', img: '/img/portfolio-4.jpg'},
    { title: 'Comunicados', text: 'Lorem ipsum dolor sit amet consectetur elit.', img: '/img/portfolio-5.jpg'},
    { title: 'Musico2', text: 'Lorem ipsum dolor sit amet consectetur elit.', img: '/img/portfolio-10.jpg'},
    { title: 'Comunicados 2', text: 'Lorem ipsum dolor sit amet consectetur elit.', img: '/img/portfolio-7.jpg'},
    { title: 'Convenios', text: 'Lorem ipsum dolor sit amet consectetur elit.', img: '/img/portfolio-1.jpg'},
    { title: 'Comunicados 3', text: 'Lorem ipsum dolor sit amet consectetur elit.', img: '/img/portfolio-9.jpg'},
    { title: 'Comunicados 4', text: 'Lorem ipsum dolor sit amet consectetur elit.', img: '/img/portfolio-8.jpg'},
    { title: 'Convenios', text: 'Lorem ipsum dolor sit amet consectetur elit.', img: '/img/portfolio-11.jpg'},
    { title: 'Convenios3', text: 'Lorem ipsum dolor sit amet consectetur elit.', img: '/img/portfolio-14.jpg'},
    { title: 'Comunicados 5', text: 'Lorem ipsum dolor sit amet consectetur elit.', img: '/img/portfolio-6.jpg'}

];

const itemsPorPagina = 4;
let currentPage = 1;

/* Renderizar Noticias Dinamicamente */
function renderNews(page) {
  const startIndex = (page - 1) * itemsPorPagina;
  const endIndex = startIndex + itemsPorPagina;
  const newsToDisplay = data.slice(startIndex, endIndex);

  const newsContainer = document.getElementById("news-container");
  newsContainer.innerHTML = "";

  newsToDisplay.forEach(news => {
    const newsHTML = `
      <div class="col-12 col-md-6 mb-3">
        <div class="card card-custom">
          <div class="row no-gutters">
            <div class="col-4">
              <img src="${news.img}" class="card-img" alt="Imagen" />
            </div>
            <div class="col-8">
              <div class="card-body">
                <h5 class="card-title">${news.title}</h5>
                <p class="card-text pr-10">${news.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    `;
    newsContainer.innerHTML += newsHTML;
  });

  renderPagination();
}

/* Renderizar numeros de pagina */
function renderPagination() {
  const pageCount = Math.ceil(data.length / itemsPorPagina);
  const paginationContainer = document.querySelector(".pagination");
  paginationContainer.innerHTML = `
    <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
      <a class="page-link" href="#" id="previous-page">Anterior</a>
    </li>
  `;

  for (let i = 1; i <= pageCount; i++) {
    paginationContainer.innerHTML += `
      <li class="page-item ${currentPage === i ? 'active' : ''}">
        <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
      </li>
    `;
  }

  paginationContainer.innerHTML += `
    <li class="page-item ${currentPage === pageCount ? 'disabled' : ''}">
      <a class="page-link" href="#" id="next-page">Siguiente</a>
    </li>
  `;

  document.getElementById("previous-page").onclick = () => changePage(currentPage - 1);
  document.getElementById("next-page").onclick = () => changePage(currentPage + 1);
}

function changePage(page) {
  const pageCount = Math.ceil(data.length / itemsPorPagina);
  if (page >= 1 && page <= pageCount) {
    currentPage = page;
    renderNews(currentPage);
  }
}

// Inicializa la paginación
renderNews(currentPage);

/* Carousel Dinamico */
function renderCarousel() {
  const carouselContainer = document.getElementById("carouselAutoplaying");
  carouselContainer.innerHTML = "";
  carouselToDisplay.forEach(carousel => {
      const carouselHTML = `
      <div id="carouselAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="img/portfolio-2.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="img/portfolio-4.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="img/portfolio-12.jpg" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
      `
      carouselContainer.innerHTML += carouselHTML;
  });
}

/* Navegación */
/* Actualizar la pestaña activa y el filtro */
function activeLink(event) {
  for (let l of link) {
    l.classList.remove('active');
  }
  event.target.classList.add('active');
  currentFilter = event.target.getAttribute("value");
  currentPage = 1; // Resetear a la primera página al cambiar de filtro
  renderNews(currentPage);
}

/* Añadir evento a los enlaces de las pestañas */
let link = document.getElementsByClassName('nav-link');
for (let l of link) {
  l.addEventListener('click', activeLink);
}