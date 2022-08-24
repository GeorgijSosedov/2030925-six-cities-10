type ImageProps = {
    image: string
  }
  
  function PropertyImage({image}: ImageProps) : JSX.Element {
    return (
      <div className="property__image-wrapper">
        <img className="property__image" src={image} alt="Фото комнаты"/>
      </div>
    ) ;
  }
  
  export default PropertyImage;