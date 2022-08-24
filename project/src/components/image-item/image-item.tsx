type ImageProps = {
    imageItem: string
  }
  
  function PropertyImage({imageItem}: ImageProps) : JSX.Element {
    return (
      <div className="property__image-wrapper">
        <img className="property__image" src={imageItem} alt="Фото комнаты"/>
      </div>
    ) ;
  }
  
  export default PropertyImage;