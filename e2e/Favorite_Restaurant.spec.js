const assert = require("assert");

Feature("Favorite Restaurant");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty favorite restaurant", ({ I }) => {
  I.seeElement("#notif-error");
  I.see("Tidak ada restaurant untuk ditampilkan", "#notif-error");
});

Scenario("liking one restaurant", async ({ I }) => {
  I.see("Tidak ada restaurant untuk ditampilkan", "#notif-error");

  I.amOnPage("/");
  I.seeElement(".list-item-title a");

  const firstRestorant = locate(".list-item-title a").first();

  const firstRestorantTitle = await I.grabTextFrom(firstRestorant);
  I.click(firstRestorant);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".list-item");
  const likedFilmTitle = await I.grabTextFrom(".list-item-title");

  assert.strictEqual(firstRestorantTitle, likedFilmTitle);
});
