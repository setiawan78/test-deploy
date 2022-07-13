import CONFIG from '../../globals/config';

const createWaroengkuItemTemplate = (resto) => `
  <div class="waroengku-item">
    <div class="waroengku-item__header">
        <img 
            class="lazyload waroengku-item__header__poster" 
            data-src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}" 
            alt="${resto.name}." 
            height="200px"
       />
        <span class="c_rating">
              <i title="ratings" class="fa fa-star"></i>
              <span>${resto.rating}</span>
        </span>
    </div>
    <div class="waroengku-item__content">
      <h1 tabindex="-1" class="waroengku-item__title">
        <a tabindex="0" class="waroengku-item__content__link" href="${`/#/detail/${resto.id}`}">
          <span class=  waroengku-item__content__title>
            ${resto.name}
          </span>
        </a>
      </h1>
      <p class="kota">${resto.city}</p>
      <p class="waroengku-item__description">${resto.description}</p>
    </div>
  </div>
`;

const createWaroengkuDetailTemplate = (resto) => `
  <div>
    <h2 class="waroengku__title">${resto.name}</h2>
    <img 
        class="waroengku__poster" 
        src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}" 
        alt="${resto.name}."
    />
    <div class="waroengku__info">
        <h4>Rating</h4>
        <i title="ratings" class="fas fa-star icon-primary2"></i>
        <p class="detail-name-address-rating">${resto.rating}</p>
        <h4>City</h4>
        <i title="restaurant" class="fas fa-store-alt icon-primary"></i>
        <p class="detail-name-address-rating">${resto.city}</p>
        <h4>Address</h4>
        <i title="address" class="fas fa-map-marker-alt icon-primary"></i>
        <p class="detail-name-address-rating">${resto.address}</p>
        <h4>Description</h4>
        <p class="detail-deskrip">${resto.description}</p>
        <h4>Category<h4>
        <li>${resto.categories
    .map(
      (category) => `
                <span class="category">${category.name}</span>
              `,
    )
    .join('')}
        </li>
    </div>
    
    <h4 class="menu__table-title">Menus</h4>
    <div class="table__menus">
      <div class="detail-makanan">
          <h4 class="judulmenu">Menu Makanan:</h4>
          <ul>
          ${resto.menus.foods.map((menu, i) => `
            <p><li>${i + 1}) ${menu.name}</p></li>
          `).join('')}
          </ul>
      </div>

        <div class="detail-minuman">
          <h4 class="judulmenu">Menu Minuman:</h4>
          <ul>
          ${resto.menus.drinks.map((menu, i) => `
          <p><li>${i + 1}) ${menu.name}</p></li>
          `).join('')}
          </ul>
        </div>
    </div>

    <h2 class="review__title">Customer Reviews</h2>
    <div class="waroengku__reviews">
      ${resto.customerReviews.map((review, index) => `
        <div class="card" key=${index}>
          <h3>${review.name}</h3>
          <h4>${review.date}</h4>
          <p>"${review.review}"</p>
        </div>
      `).join('')}
    </div>
    <div class="form-review">
    <p class="judul-subreview">Add New Review</p>
    <form>
      <input type="hidden" value="${resto.id}" id="id-resto"/>
      <label class="lab-nameulas" for="name">Name</label>
      <input class="sect-nama" id="name" type="text" required/>
      <label class="judululas-review" for="message">Ulasan</label>
      <textarea class="sect-ulas" id="message" required></textarea>
      <button id="submit-ulasanviewer" type="submit">
        <span class="netral">Send Review</span>
      </button>
    </form>
    </div>
  </div>
`;

const createAboutUsTemplate = () => `
      <div class="about-me">
        <h2>About <span>Us</span></h2>
      </div>
      <div class="profile-card">
      <div class="img-thumb">
        <img data-src="images/profil.png" alt="indra setiawan" class="lazyload"/>
      </div>
      <div class="bio-profile">
        <h3>Indra Setiawan</h3>
        <p>Mahasiswa Universitas Dinamika<p>
        <p>Front-End Developer<p>
        <a href="https://www.linkedin.com/in/indra-setiawan-b2009822b/" target="_blank" rel="noopener">Visit LinkedIn</a>
        <a href="https://github.com/setiawan78" target="_blank" rel="noopener">Visit Github</a>
      </div>
      </div>
`;

const createLikeWaroengkuButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createunLikedWaroengkuButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createWaroengkuItemTemplate,
  createWaroengkuDetailTemplate,
  createAboutUsTemplate,
  createLikeWaroengkuButtonTemplate,
  createunLikedWaroengkuButtonTemplate,
};
