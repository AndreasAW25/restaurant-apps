import TheRestaurantDbSource from '../data/therestaurantdb-source';

const PostReview = (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };

  TheRestaurantDbSource.postReview(dataInput);

  const reviewContainer = document.querySelector('#detail-review');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', options);
  const newReview = `
    ","
    <div class="list-review">
        <img src="./images/user.png" alt="review-img" class="review-img" />

        <div class="list-detail-review">
            <div class="review-nama">${name} <span class="review-tanggal">- ${date}</span></div>
            <div class="review-detail">${review}</div>
        </div>
    </div>
    `;
  reviewContainer.innerHTML += newReview;
};

export default PostReview;
