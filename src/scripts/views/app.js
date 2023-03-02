import MenuInitiator from '../utils/menu-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, menu, content }) {
    this._button = button;
    this._menu = menu;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    MenuInitiator.init({
      button: this._button,
      menu: this._menu,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#container-content').focus();
    });

    await page.afterRender();
  }
}

export default App;
