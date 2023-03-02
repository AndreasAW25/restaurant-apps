import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createHeader, createListRestaurant } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <header class="hero">
            <div class="hero-inner" id="containt-header"></div>
        </header>
        <div id="loading" class="preloader"></div>
        <main id="content">
            <section class="content">
                <div class="content-list">
                    <div tabindex="0" class="content-title">Daftar Favorite</div>
                    <div id="notif-error" class="content-title-error"></div>
                    <div class="list" id="list-restoran"></div>
                </div>
            </section>
        </main>
        `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    const main = document.querySelector('#content');
    const containHeader = document.querySelector('#containt-header');
    const listDetail = document.querySelector('#list-restoran');
    const notifError = document.querySelector('#notif-error');

    containHeader.innerHTML = createHeader();
    main.style.display = 'none';
    notifError.style.display = 'none';

    try {
      const listRestaurant = await FavoriteRestaurantIdb.getAllRestaurants();
      if (listRestaurant.length === 0) {
        notifError.style.display = 'block';
        notifError.innerHTML = `
        Tidak ada restaurant untuk ditampilkan.
        `;
      }
      listRestaurant.forEach((restaurant) => {
        listDetail.innerHTML += createListRestaurant(restaurant);
      });
      main.style.display = 'block';
      loading.style.display = 'none';
    } catch (err) {
      main.style.display = 'block';
      loading.style.display = 'none';
      notifError.style.display = 'block';
      notifError.innerHTML = `Error: ${err}, silahkan periksa koneksi Anda dan lakukan refresh ulang!`;
    }
  },
};

export default Favorite;
