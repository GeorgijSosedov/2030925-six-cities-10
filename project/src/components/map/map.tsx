import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css'
import { useEffect, useRef } from 'react';
import { URL_MARKER_DEFAULT , URL_MARKER_CURRENT} from '../../const';
import useMap from '../../hooks/use-map';
import { City, Location, MockOffer, Offer } from '../../types/offer'
import MapList from '../map-list/map-list';

type MapProps = {
offers: Offer
selectedOffer: Offer | undefined
}

const defaultCustomIcon = new Icon ({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
})

const currentCustomIcon = new Icon ({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
})

function Map({offers,selectedOffer}: MapProps): JSX.Element {
    const mapRef = useRef(null)
    const map = useMap(mapRef, offers[0].city)

    useEffect(() => {
        if (map) {
          offers.forEach((offer) => {
            const marker = new Marker({
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            });
    
            marker
              .setIcon(
                selectedOffer === offers
                  ? currentCustomIcon
                  : defaultCustomIcon
              )
              .addTo(map);
          });
        }
      }, [selectedOffer, map, offers]);

    return(
     <section
        style={{height: '100%'}}
        className='cities__map'
        ref={mapRef}
     >
        </section>
    );
}

export default Map