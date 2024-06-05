/* Navegación */
/* Actualizar la pestaña activa y el filtro */
function activeLink(event) {
  event.preventDefault();
  for (let l of link) {
    l.classList.remove('active');
  }
  event.target.classList.add('active');
  currentFilter = event.target.getAttribute("data-filter");
  currentPage = 1; // Resetear a la primera página al cambiar de filtro
  renderNews(currentPage);
}

/* Añadir evento a los enlaces de las pestañas */
let link = document.getElementsByClassName('nav-link');
for (let l of link) {
  l.addEventListener('click', activeLink);
}

let currentFilter = 'all';


/** Paginacion */
/* Elementos Dinamicos */
const data = [
  { title: 'Musico', text: 'Lorem ipsum dolor sit amet consectetur elit.', lgtext:'',   img: '/img/portfolio-2.jpg', category: 'Avisos' },
  { title: 'Convenios', text: 'Lorem ipsum dolor sit amet consectetur elit.', lgtext:'',  img: '/img/portfolio-3.jpg', category: 'Eventos' },
  { title: 'Independencia', text: 'Lorem ipsum dolor sit amet consectetur elit.', lgtext:'',  img: '/img/portfolio-4.jpg', category: 'Avisos' },
  { title: 'Comunicados', text: 'Lorem ipsum dolor sit amet consectetur elit.', lgtext:'',  img: '/img/portfolio-5.jpg', category: 'Comunicados' },
  { title: 'Musico2', text: 'Lorem ipsum dolor sit amet consectetur elit.', lgtext:'',  img: '/img/portfolio-10.jpg', category: 'Avisos' },
  { title: 'Comunicados 2', text: 'Lorem ipsum dolor sit amet consectetur elit.', lgtext:'',  img: '/img/portfolio-7.jpg', category: 'Comunicados' },
  { title: 'Convenios', text: 'Lorem ipsum dolor sit amet consectetur elit.', lgtext:'',  img: '/img/portfolio-1.jpg', category: 'Eventos' },
  { title: 'Comunicados 3', text: 'Lorem ipsum dolor sit amet consectetur elit.', lgtext:'',  img: '/img/portfolio-9.jpg', category: 'Comunicados' },
  { title: 'Comunicados 4', text: 'Lorem ipsum dolor sit amet consectetur elit.', lgtext:'',  img: '/img/portfolio-8.jpg', category: 'Comunicados' },
  { title: 'Convenios', text: 'Lorem ipsum dolor sit amet consectetur elit.', lgtext:'',  img: '/img/portfolio-11.jpg', category: 'Eventos' },
  { title: 'Convenios3', text: 'Lorem ipsum dolor sit amet consectetur elit.', lgtext:'',  img: '/img/portfolio-14.jpg', category: 'Eventos' },
  { title: 'Convenios4', text: 'Lorem ipsum dolor sit amet consectetur elit.', lgtext:'',  img: '/img/portfolio-13.png', category: 'Eventos' },
  { title: 'Convenios4', text: 'Lorem ipsum dolor sit amet consectetur elit.', lgtext:'',  img: '/img/registrousuario.mp4', category: 'Videos' },
  { title: 'Comunicados 5', text: 'Lorem ipsum dolor sit amet consectetur elit.', lgtext:'',  img: '/img/portfolio-6.jpg', category: 'Comunicados' }
];


const itemsPorPagina = 4;
let currentPage = 1;

/* Renderizar Noticias Dinamicamente */
function renderNews(page) {
  let filteredData = data;
  if (currentFilter !== 'all') {
    filteredData = data.filter(news => news.category === currentFilter);
  }
  const startIndex = (page - 1) * itemsPorPagina;
  const endIndex = startIndex + itemsPorPagina;
  const newsToDisplay = filteredData.slice(startIndex, endIndex);

  const newsContainer = document.getElementById("news-container");
  newsContainer.innerHTML = "";

  newsToDisplay.forEach(news => {
    const newsHTML = `
        <div class="col-12 col-md-6 mb-3">
           <div class="card card-custom" data-bs-toggle="modal" data-bs-target="#newsModal" onclick="openModal('${news.title}', '${news.img}', '${news.lgtext}')">
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

  renderPagination(filteredData.length);
}


/* Renderizar numeros de pagina */
function renderPagination(totalItems) {
  const pageCount = Math.ceil(totalItems / itemsPorPagina);


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


/* Modal */
function openModal(title, img, text) {
  // Llenar los datos del modal con la información de la noticia seleccionada
  document.getElementById('newsModalLabel').textContent = title;
  document.getElementById('newsModalImage').src = img;
  document.getElementById('newsModalText').textContent = text;

}