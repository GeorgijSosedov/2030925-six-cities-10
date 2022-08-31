import { Offer } from "../../types/offer";
import OfferCard from "../card/offer-card";

type MapListProps = {
    offersCount: number
    offers: Offer
    onOfferCardMouseOver?: (id: number) => void,
    onOfferCardMouseLeave?: () => void,
};

function MapList({offers,onOfferCardMouseOver,onOfferCardMouseLeave}: MapListProps): JSX.Element {
 const AmsterdamOffers = offers.filter((offer) => offer.city.name === 'Amsterdam');
    return (
        <div className="cities__places-list places__list tabs__content">
          {offers.map((item) => 
        <OfferCard
         key={item.id}
         id={item.id}
         previewImage={item.previewImage}
         isFavorite={item.isFavorite}
         isPremium={item.isPremium}
         title={item.title}
         type={item.type}
         price={item.price}
         rating={item.rating}
         onOfferCardMouseOver = {onOfferCardMouseOver}
         onOfferCardMouseLeave = { onOfferCardMouseLeave}/>)}
        </div>
      );
    }

export default MapList