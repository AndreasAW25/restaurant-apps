import CONFIG from '../../globals/config';

const createHeader = () => `
        <p tabindex="0" class="hero-title">Solo Kuliner</p>
        <p tabindex="0" class="hero-subtitle">Temukan daftar kuliner yang ada di kota solo.</p> 
`;

const createListRestaurant = (listRestaurant) => `
<div class="list-item">
    <div class="list-item-image">
        <img class="lazyload list-item-thumb" data-src="${CONFIG.BASE_URL_IMG_S}/${listRestaurant.pictureId}" alt="${listRestaurant.name}" title="${listRestaurant.name}">
        <div tabindex="0" class="city">${listRestaurant.city}</div>
        <div class="view-detail">
            <a class="text-detail" href="${`#/detail/${listRestaurant.id}`}" alt="Lihat Detail" title="Lihat Detail"><i class="fa fa-eye"></i></a>
        </div>
    </div>
    <div class="list-item-content">
        <div class="list-item-title"><a href="${`#/detail/${listRestaurant.id}`}">${listRestaurant.name}</a></div>
        <div tabindex="0" class="list-item-rating">
            Rating : 
            <span class="list-item-rating-value"><i class="fa fa-star"></i> ${listRestaurant.rating}</span>
        </div>
        <div tabindex="0" class="list-item-desc">${listRestaurant.description.slice(0, 150)}...</div>
    </div>
</div>
`;

const createDetailBreadcrumb = (details) => `
<ul class="breadcrumb">
    <li><a href="#/home">Home</a></li>
    <li tabindex="0">Detail Restoran</li>
    <li tabindex="0">${details.name}</li>
</ul>
`;

const createDetailItem = (details) => `
<div class ="list-detail-item">
    <div class="list-detail-item-image">
    <img class="lazyload list-detail-item-thumb" data-src="${CONFIG.BASE_URL_IMG_L}/${details.pictureId}" alt="${details.name}" title="${details.name}">
    </div>
    <div class="list-detail-item-content">
    <div tabindex="0" class="list-detail-item-content-title">${details.name}</div>
    <div tabindex="0" class="list-detail-item-content-rating">
        Rating : <span class="list-detail-item-content-rating-value"><i class="fa fa-star"></i> ${details.rating}</span>
    </div>

    <div tabindex="0" class="list-detail-item-content-title">Alamat</div>
    <div tabindex="0" class="list-detail-item-content-alamat">${details.address}-${details.city}</div>
    <div tabindex="0" class="list-detail-item-content-title">Deskripsi</div>
    <div tabindex="0" class="list-detail-item-content-desc">${details.description}</div>
    <div tabindex="0" class="list-detail-item-content-title">Kategori</div>
    <div class="detail-kategori">
    ${details.categories.map((categorie) => `
    <div tabindex="0" class="item-kategori">${categorie.name}</div>`).join('')}
    </div>
    </div>
</div>
`;
const createListMenu = (details) => `
<div tabindex="0" class="list-detail-item-content-title">Daftar Menu</div>
    <div class="list-menu">
        <div class="kategori-menu">
            <div tabindex="0" class="kategori-menu-title">Makanan</div>
            <div class="kategori-menu-list">
                ${details.menus.foods.map((food) => `
                <div tabindex="0" class="item-menu">${food.name}</div>`).join('')}
            </div>
        </div>
        <div class="kategori-menu">
            <div tabindex="0" class="kategori-menu-title">Minuman</div>
            <div class="kategori-menu-list">
                ${details.menus.drinks.map((drink) => `
                <div tabindex="0" class="item-menu">${drink.name}</div>`).join('')}
            </div>
        </div>
    </div>
`;

export {
  createHeader,
  createListRestaurant,
  createDetailBreadcrumb,
  createDetailItem,
  createListMenu,
};
