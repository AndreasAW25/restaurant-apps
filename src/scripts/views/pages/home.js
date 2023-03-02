import TheRestaurantDbSource from '../../data/therestaurantdb-source';

const { createHeader, createListRestaurant } = require('../templates/template-creator');

const Home = {
  async render() {
    return `
        <header class="hero">
            <div class="hero-inner" id="containt-header"></div>
        </header>
        <div id="loading" class="preloader"></div>
        <main id="content">
            <section class="content">
                <div class="content-list">
                    <div tabindex="0" class="content-title">Daftar Restoran</div>
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
      const Restaurants = await TheRestaurantDbSource.listRestaurant();
      Restaurants.restaurants.forEach((restaurant) => {
        listDetail.innerHTML += createListRestaurant(restaurant);
      });
      main.style.display = 'block';
      loading.style.display = 'none';
    } catch (err) {
      main.style.display = 'block';
      loading.style.display = 'none';
      listDetail.innerHTML = `Error: ${err}, silahkan periksa koneksi Anda dan lakukan refresh ulang!`;
    }
  },
};

export default Home;
