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
    { title: 'Título 63', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: '/img/portfolio-9.jpg' },
    { title: 'Musico78', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: '/img/portfolio-10.jpg' },
    { title: 'Convenios6', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: '/img/portfolio-12.jpg' },
    { title: 'Título 12', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: '/img/portfolio-14.jpg' },
    { title: 'Título 23', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: '/img/portfolio-6.jpg' }
    

];

const itemsPorPagina = 4;
let currentPage = 1;

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
                <p class="card-text">${news.text}</p>
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