import {Route,BrowserRouter,Routes, Link} from "react-router-dom";
import {AppRoute, AuthorizationStatus} from "../../const";
import WelcomeScreen from "../../pages/welcome-screen";
import FavoritesEmpty from "../../pages/favorites-empty";
import Favorites from "../../pages/favorites";
import MainEmpty from '../../pages/main-empty';
import PropertyNotLogged from '../../pages/property-not-logged';
import Property from '../../pages/property';
import Login from "../../pages/login";
import { Fragment } from "react";
import PrivateRoute from "../../components/private-route/private-route"
import {Offers,MockOffer} from '../../types/offer'
import {Reviews,MockReview,} from "../../types/review";


type AppScreenProps = {
  offersCount: number
  offers: Offers
  reviews: Reviews
};

function App({offersCount, offers,reviews}: AppScreenProps):JSX.Element {

return ( 
 <BrowserRouter>
  <Routes>
    <Route
    path={'/'}
    element={<WelcomeScreen offers={offers} offersCount={offersCount}/>}
    />
    <Route
    path={'/login'}
    element={<Login />}
    />
    <Route
    path={'/favorites'}
    element={
      <PrivateRoute
        authorizationStatus={AuthorizationStatus.Auth}
      >
        <Favorites offers={offers} />
      </PrivateRoute>
      }
    />
    <Route
    path={'/offers/:id'}
    element={
      <Property
      offer ={offers}
      review ={reviews}
    />}
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