import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    menuLines, main, nav,
  }) {
    this._menuLines = menuLines;
    this._main = main;
    this._nav = nav;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      menuLines: this._menuLines,
      main: this._main,
      nav: this._nav,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._main.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
