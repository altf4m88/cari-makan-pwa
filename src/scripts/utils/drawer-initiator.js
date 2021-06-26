/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
  init({
    menuLines, main, nav,
  }) {
    menuLines.addEventListener('click', (event) => {
      this._toggleDrawer(event, nav);
    });

    main.addEventListener('click', (event) => {
      this._closeDrawer(event, nav);
    });
  },

  _toggleDrawer(event, nav) {
    event.stopPropagation();
    nav.classList.toggle('on-click');
  },

  _closeDrawer(event, nav) {
    event.stopPropagation();
    nav.classList.remove('on-click');
  },
};

export default DrawerInitiator;
