import { generatePath, Link } from 'react-router-dom'
import { AppRoute } from '../../const'
import { MockOffer, Offer } from '../../types/offer';

type OfferScreenProps = {
  id: number,
  previewImage: string,
  isFavorite: boolean,
  isPremium: boolean,
  title: string,
  type: string,
  price: number,
  rating: number,
  onOfferCardMouseOver?: (id: number) => void,
  onOfferCardMouseLeave?: () => void,
  }

function OfferCard(props: OfferScreenProps): JSX.Element {
return (
<article className="cities__card place-card">
                <div className="cities__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src={props.previewImage} width="260" height="200" alt="Place image"/>
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;{props.price}</b>
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
                    <span style={{width: `${props.rating * 20}%`}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                  <Link to={generatePath(AppRoute.Room, {id: `${props.id}`})}>{props.title}</Link>
                  </h2>
                  <p className="place-card__type">{props.type}</p>
                </div>
              </article>
)
}
export default OfferCard