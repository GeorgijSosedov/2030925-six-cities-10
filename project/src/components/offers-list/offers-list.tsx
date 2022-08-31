import OfferCard from '../card/offer-card';
import {Offer} from '../../types/offer';
import {Fragment} from 'react';

type OfferListProps = {
  offersCount: number
  offers: Offer
  onOfferCardMouseOver?: (id: number) => void,
  onOfferCardMouseLeave?: () => void
}

function OfferList({offers, onOfferCardMouseOver, onOfferCardMouseLeave,}: OfferListProps): JSX.Element {
  return (
    <Fragment>
      {
        offers.map((item) => (
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
            onOfferCardMouseOver={onOfferCardMouseOver}
            onOfferCardMouseLeave={onOfferCardMouseLeave}
          />
        ))
      }
    </Fragment>
  );
}

export default OfferList;