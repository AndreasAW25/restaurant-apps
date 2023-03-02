import URLParse from '../../routes/url-parser';
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import {
  createHeader, createDetailBreadcrumb, createDetailItem, createListMenu,
} from '../templates/template-creator';
import { createListReview, createFormReview } from '../templates/template-review';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import PostReview from '../../utils/post-review';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
    <header class="hero">
        <div class="hero-inner" id="containt-header">
        </div>
    </header>
    <div id="loading" class="preloader"></div>
    <main id="content">
        <section class="content">
            <div class="content-list">
                <div id="notif-error" class="content-title-error"></div>
                <div class="containt-breadcrumb" id="containt-breadcrumb"></div>
                <div class="list-detail" id="list-detail">
                    <div id="containt-detail" class="list-detail-restaurant"></div>
                    <div id="list-menu" class="detail-menu"></div>
                    <div id="detail-review" class="detail-review"></div>
                    <div id="add-review"></div>
                </div>
            </div>
        </section>
    </main>
    <div id="likeButtonContainer"></div> 
    `;
  },
  async afterRender() {
    const loading = document.querySelector('#loading');
    const main = document.querySelector('#content');
    const containtHeader = document.querySelector('#containt-header');
    const containtBreadcrumb = document.querySelector('#containt-breadcrumb');
    const containtDetail = document.querySelector('#containt-detail');
    const listMenu = document.querySelector('#list-menu');
    const listReview = document.querySelector('#detail-review');
    const addReview = document.querySelector('#add-review');
    const notifError = document.querySelector('#notif-error');
    const listDetail = document.querySelector('#list-detail');

    const url = URLParse.parseActiveUrlWithoutCombiner();

    containtHeader.innerHTML = createHeader();
    main.style.display = 'none';
    notifError.style.display = 'none';

    try {
      const getDetailById = await TheRestaurantDbSource.detailRestaurant(url.id);
      const { restaurant } = getDetailById;
      const getDetailRestaurant = getDetailById.restaurant;
      containtBreadcrumb.innerHTML = createDetailBreadcrumb(getDetailRestaurant);
      containtDetail.innerHTML = createDetailItem(getDetailRestaurant);
      listMenu.innerHTML = createListMenu(getDetailRestaurant);
      listReview.innerHTML = createListReview(getDetailRestaurant);
      addReview.innerHTML = createFormReview();

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurant: FavoriteRestaurantIdb,
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          city: restaurant.city,
          rating: restaurant.rating,
          description: restaurant.description,
          pictureId: restaurant.pictureId,
        },

      });

      main.style.display = 'block';
      loading.style.display = 'none';
    } catch (err) {
      main.style.display = 'block';
      loading.style.display = 'none';
      notifError.style.display = 'block';
      listDetail.style.display = 'none';
      notifError.innerHTML = `Error: ${err}, silahkan periksa koneksi Anda dan lakukan refresh ulang!`;
    }

    const btnSubmit = document.querySelector('#submit-review');
    const nameInput = document.querySelector('#inputName');
    const reviewInput = document.querySelector('#inputReview');

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if (nameInput.value === '' || reviewInput.value === '') {
        alert('Inputan tidak boleh ada yang kosong'); // eslint-disable-line no-alert
        if (nameInput.value === '') {
          nameInput.focus();
        } else {
          reviewInput.focus();
        }
      } else {
        PostReview(url, nameInput.value, reviewInput.value);
        nameInput.value = '';
        reviewInput.value = '';
      }
    });
  },
};
export default Detail;
