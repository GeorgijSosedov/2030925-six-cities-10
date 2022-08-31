import {Route,BrowserRouter,Routes, Link} from "react-router-dom";
import {AppRoute, AuthorizationStatus} from "../../const";
import WelcomeScreen from "../../pages/welcome-screen";
import FavoritesEmpty from "../../pages/favorites-empty";
import Favorites from "../../pages/favorites";
import MainEmpty from '../../pages/main-empty';
import PropertyNotLogged from '../../pages/property-not-logged';
import Property from '../../pages/property';
import Login from "../../pages/login";
import React, { Fragment } from "react";
import PrivateRoute from "../../components/private-route/private-route"
import {Offer,MockOffer} from '../../types/offer'
import {Review,MockReview} from "../../types/review";
import MapList from "../map-list/map-list";
import { Map } from "leaflet";


type AppScreenProps = {
  offersCount: number
  offers: Offer
  reviews: Review
};

function App({offersCount, offers,reviews}: AppScreenProps):JSX.Element {

return ( 
 <BrowserRouter>
  <Routes>
    <Route
    path={AppRoute.Main}
    element={
    <WelcomeScreen offers={offers} offersCount={offersCount}/>
  }
    />
    <Route
    path={AppRoute.Login}
    element={<Login />}
    />
    <Route
    path={AppRoute.Favorites}
    element={
      <PrivateRoute
        authorizationStatus={AuthorizationStatus.NoAuth}
      >
        <Favorites offers={offers} />
      </PrivateRoute>
      }
    />
    <Route
    path={AppRoute.Room}
    element={
      <Property
      offer={offers}
      review={reviews}
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