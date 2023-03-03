const createListReview = (details) => `
<div tabindex="0" id="list-review" class="list-detail-item-content-title">Review</div>
${details.customerReviews.map((review) => `
<div class="list-review">
    <img src="./images/user.png" alt="review-img" class="review-img" />

    <div class="list-detail-review">
        <div tabindex="0" class="review-nama">${review.name} <span class="review-tanggal">- ${review.date}</span></div>
        <div tabindex="0" class="review-detail">${review.review}</div>
    </div>
</div>
`)}
`;

const createFormReview = () => `
    <div class="form-review">
    <div tabindex="0" class="list-detail-item-content-title">Tambah Review</div>
        <form>
        <div class="form-input">
            <label for="inputName" class="form-label">Name</label>
            <input type="text" class="form-control" id="inputName" placeholder="Nama">
        </div>
        <div class="form-input">
            <label for="inputReview" class="form-label">Review</label>
            <textarea class="form-control" id="inputReview" placeholder="Detail review" rows="4" cols="50"></textarea>
        </div>
        <button id="submit-review" type="button" class="btn-submit">Submit</button>
        </form>
    </div>
`;

export { createListReview, createFormReview };
