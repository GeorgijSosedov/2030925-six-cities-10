import {Route,BrowserRouter,Routes, Link} from "react-router-dom";
import {AppRoute} from "../../const";
import WelcomeScreen from "../../pages/welcome-screen";
import FavoritesEmpty from "../../pages/favorites-empty";
import Favorites from "../../pages/favorites";
import MainEmpty from '../../pages/main-empty';
import PropertyNotLogged from '../../pages/property-not-logged';
import Property from '../../pages/property';
import Login from "../../pages/login";
import { Fragment } from "react";


type AppScreenProps = {
  errorsCount: number
};

function App ({errorsCount}: AppScreenProps):JSX.Element {
return ( 
 <BrowserRouter>
  <Routes>
    <Route
    path={'/'}
    element={<WelcomeScreen errorsCount={errorsCount}/>}
    />
    <Route
    path={'/login'}
    element={<Login />}
    />
    <Route
    path={'/favorites'}
    element={<Favorites />}
    />
    <Route
    path={'/offers/:id'}
    element={<Property/>}
    />
   <Route
path={'*'}
element={
  <Fragment>
    <h1>
      404.
      <br />
      <small> Oops! Looks like the page is lost </small>
    </h1>
    <Link to = "/"> Click here to return </Link>
  </Fragment>
}
/>
  </Routes>
 </BrowserRouter>
  );
}
export default App;


/*  <Route
path={'*'}
element={<PageNotFound/>}
/>
*/

/*import PageNotFound from "../../pages/page-not-found";*/