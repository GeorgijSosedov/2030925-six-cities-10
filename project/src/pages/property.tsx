import { current } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";
import Goods from "../components/goods/goods";
import Logo from "../components/logo/logo";
import { offers } from "../mocks/offers";
import { MockOffer, Offers } from "../types/offer";
import { Reviews } from "../types/review";

type OfferScreenProps = {
  offer: Offers
  review: Reviews
}
/*{offers.map((offer,id) => {
  const keyValue = `${id}-${offer.src}`
       return (
         <div key={keyValue} className = "offer"/>
*/

function Property(props: OfferScreenProps):JSX.Element {
const params = useParams()
const offerId = Number(params.id)
const currentOffer = offers.filter((item: { id: number; }) => item.id === offerId)[0];
const otherOffers = offers.filter((item: { id: number; }) => item.id !== offerId);
  return(
<div>
  <div style={{display: 'none'}}></div>
  <section className="property"/>
          <div className="property__gallery-container container">
            <div className="property__gallery">
            {currentOffer.images.map((item) => <Goods key={item} image={item} />)}
            </div>
            <div className="property__container container"/>
            <div className="property__wrapper">
      {
      currentOffer.isPremium ?
      <div className="property__mark">
        <span>Premium</span>
        </div>
        : null
    }
  <div className="property__name-wrapper">
                <h1 className="property__name">
                  Beautiful &amp; luxurious studio at great location
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                <span style={{width: `${currentOffer.rating * 20}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {currentOffer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  Max{currentOffer.bedrooms}Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                Max{currentOffer.maxAdults}Adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{currentOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {currentOffer.goods.map((item)=>
                  <Goods key={item} image={item}                  
                  />)}
                </ul>
              </div>
            </div>
          </div>
        </div>
)
  }
export default Property

/*
   <><head /><meta charSet="utf-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>6 cities: property</title><link rel="stylesheet" href="css/main.css"/>link


      <body />
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      <div/>

      <div className="page" />
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <Logo/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property"/>
        <section className="property"/>
              <><><><div className="property__gallery-container container">
                <div className="property__gallery">
                  {images}
                </div>
              </div><div className="property__container container">
                  <div className="property__wrapper">
                    <div className="property__mark">
                      <span>{isPremium}</span>
                    </div>
                    <div className="property__name-wrapper">
                      <h1 className="property__name">
                        {offer.title}
                      </h1>
                      <button className="property__bookmark-button button" type="button">
                        <svg className="property__bookmark-icon" width="31" height="33">
                          <use xlinkHref="#icon-bookmark"></use>
                        </svg>
                        <span className="visually-hidden">To bookmarks{isFavorite}</span>
                      </button>place-card
                    </div>
                    <div className="property__rating rating">
                      <div className="property__stars rating__stars">
                        <span className="visually-hidden">{rating}</span>
                      </div>
                      <span className="property__rating-value rating__value">4.8</span>
                    </div>
                    <ul className="property__features">
                      <li className="property__feature property__feature--entire">
                        {type}
                      </li>
                      <li className="property__feature property__feature--bedrooms">
                        {bedrooms}
                      </li>
                      <li className="property__feature property__feature--adults">
                        {maxAdults}
                      </li>
                    </ul>
                    <div className="property__price">
                      <b className="property__price-value">&euro;{price}</b>
                      <span className="property__price-text">&nbsp;night</span>
                    </div>
                    <div className="property__inside">
                      <h2 className="property__inside-title">What&apos;s inside</h2>
                      <ul className="property__inside-list">
                        {goods}
                      </ul>
                    </div>
                    <div className="property__host">
                      <h2 className="property__host-title">Meet the host</h2>
                      <div className="property__host-user user">
                        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                          <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                        </div>
                        <span className="property__user-name">
                          {host.hostName}
                        </span>
                        <span className="property__user-status">
                          {host.isPro}
                        </span>
                      </div>
                      <div className="property__description">
                        <p className="property__text">
                          {title}
                        </p>
                        <p className="property__text">
                          {description}
                        </p>
                      </div>
                    </div>
                    <section className="property__reviews reviews" />
                    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                    <ul className="reviews__list" />
                    <li className="reviews__item" />

                            <form className="reviews__form form" action="#" method="post">
                              <label className="reviews__label form__label" htmlFor="review">Your review</label>
                              <div className="reviews__rating-form form__rating">
                                <input className="form__rating-input visually-hidden" name="rating" value="5" id='5-stars' type="radio" />
                                <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                                  <svg className="form__star-image" width="37" height="33">
                                    <use xlinkHref="#icon-star"></use>
                                  </svg>
                                </label>

                                <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
                                <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                                  <svg className="form__star-image" width="37" height="33">
                                    <use xlinkHref="#icon-star"></use>
                                  </svg>
                                </label>

                                <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
                                <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                                  <svg className="form__star-image" width="37" height="33">
                                    <use xlinkHref="#icon-star"></use>
                                  </svg>
                                </label>

                                <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
                                <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                                  <svg className="form__star-image" width="37" height="33">
                                    <use xlinkHref="#icon-star"></use>
                                  </svg>
                                </label>

                                <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
                                <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                                  <svg className="form__star-image" width="37" height="33">
                                    <use xlinkHref="#icon-star"></use>
                                  </svg>
                                </label>
                              </div>
                              <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
                              <div className="reviews__button-wrapper">
                                <p className="reviews__help">
                                  To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                                </p>
                                <button className="reviews__submit form__submit button" type="submit">Submit</button>
                              </div>
                            </form>
                            <section />;

                          </ul>

                        </>);
                    })}</div><section className="property__map map"></section></div>;

<div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place image"/>
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;80</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                      <svg className="place-card__bookmark-icon" width="18" height="19">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">In bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Wood and stone place</a>
                  </h2>
                  <p className="place-card__type">Private room</p>
                </div>
              </article>

              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="img/apartment-02.jpg" width="260" height="200" alt="Place image"/>
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;132</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button button" type="button">
                      <svg className="place-card__bookmark-icon" width="18" height="19">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Canal View Prinsengracht</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>

              <article className="near-places__card place-card">
                <div className="place-card__mark">
                  <span>Premium</span>
                </div>
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="img/apartment-03.jpg" width="260" height="200" alt="Place image"/>
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;180</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button button" type="button">
                      <svg className="place-card__bookmark-icon" width="18" height="19">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                    <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Nice, cozy, warm big bed apartment</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>
            </div>
          </section>
        </div>
        </main>
    </div>
  </body>
</html>
  */