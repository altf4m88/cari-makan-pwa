import MainPage from '../views/pages/main-page';
import Favourite from '../views/pages/favourite';
import Detail from '../views/pages/detail';

const routes = {
  '/': MainPage, // default page
  '/main': MainPage,
  '/favourite': Favourite,
  '/detail/:id': Detail,
};

export default routes;
