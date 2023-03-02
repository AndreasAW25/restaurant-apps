const assert = require('assert');

Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Post review restaurant', async ({ I }) => {
  const reviewText = 'Review test';

  I.seeElement('.list-item a');
  I.click(locate('.list-item a').first());

  I.seeElement('.form-review form');
  I.fillField('#inputName', 'E2E testing');
  I.fillField('#inputReview', reviewText);
  I.click('#submit-review');

  const lastReview = locate('.review-detail').last();
  const lastReviewText = await I.grabTextFrom(lastReview);
  assert.strictEqual(reviewText, lastReviewText.trim());
});
