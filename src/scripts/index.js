import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
// import WebSocketInitiator from './utils/websocket-initiator';
// import FooterToolsInitiator from './utils/footer-tools-initiator';
// import CONFIG from './globals/config';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  menu: document.querySelector('#navigation-menu'),
  content: document.querySelector('#container-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  // WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);

  // Initialize footer tools
  // FooterToolsInitiator.init({
  //     subscribeButton: document.querySelector('#subscribePushNotification'),
  //     unsubscribeButton: document.querySelector('#unsubscribePushNotification'),
  // });
});
