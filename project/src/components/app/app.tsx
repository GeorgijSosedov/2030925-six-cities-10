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
import {Offers,MockOffer, MockReview,Reviews} from '../../types/types'
import { reviews } from "../../mocks/reviews";


type AppScreenProps = {
  errorsCount: number
  offers: Offers
  reviews: Reviews
};

function App ({errorsCount, offers,reviews}: AppScreenProps):JSX.Element {
  const [firstOffer] = offers
  const [firstReview] = reviews
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
    element={
      <PrivateRoute
        authorizationStatus={AuthorizationStatus.NoAuth}
      >
        <Favorites />
      </PrivateRoute>
      }
    />
    <Route
    path={'/offers/:id'}
    element={
      <Property
      offer ={firstOffer as MockOffer}
      review ={firstReview as MockReview}
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