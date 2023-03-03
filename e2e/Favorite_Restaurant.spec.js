/* eslint-disable no-undef */
const assert = require('assert');

Feature('Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#notif-error');
  I.see('Tidak ada restaurant untuk ditampilkan', '#notif-error');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '#notif-error');

  I.amOnPage('/');
  I.seeElement('.list-item-title a');

  const firstRestorant = locate('.list-item-title a').first();

  const firstRestorantTitle = await I.grabTextFrom(firstRestorant);
  I.click(firstRestorant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list-item');
  const likedRestorantTitle = await I.grabTextFrom('.list-item-title');

  assert.strictEqual(firstRestorantTitle, likedRestorantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '#notif-error');

  I.amOnPage('/');
  I.seeElement('.list-item-title a');

  const firstRestorant1 = locate('.list-item-title a').first();
  const firstRestorantTitle1 = await I.grabTextFrom(firstRestorant1);

  I.click(firstRestorant1);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list-item-title a');

  const firstRestorant2 = locate('.list-item-title a').first();
  const firstRestorantTitle2 = await I.grabTextFrom(firstRestorant2);
  I.click(firstRestorant2);

  assert.strictEqual(firstRestorantTitle1, firstRestorantTitle2);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#notif-error');
  I.dontSeeElement('.list-item');
  I.dontSeeElement('.list-item-title');
});
