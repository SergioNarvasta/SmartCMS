
import { Home } from "./components/Home";
import SliderMainRegistro from "./components/slider-main/SliderMainRegistro";
import Login from './components/login/Login';
import UserRegistro from './components/user/UserRegistro';
import CompanyRegistro from './components/company/CompanyRegistro';
import ContentMainRegistro from './components/content-main/ContentMainRegistro';
import AsideRegistro from './components/aside/AsideRegistro';

const AppRoutes = [
  {
    index: true, element: <Home />
  },{
    path: '/slidermain', element: <SliderMainRegistro />
  },{
    path: '/login', element: <Login />
  },{
    path: '/user', element: <UserRegistro />
  },{
    path: '/companies', element: <CompanyRegistro />
  },{
    path: '/contentmain', element: <ContentMainRegistro />
  },{
    path: '/aside', element: <AsideRegistro />
  }
];

export default AppRoutes;
