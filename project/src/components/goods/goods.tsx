type GoodsProps = {
    image: string
  }
  
  function Goods({image}: GoodsProps) : JSX.Element {
    return (
      <div className="property__image-wrapper">
        <img className="property__image" src={image} alt="Фото комнаты"/>
      </div>
    ) ;
  }
  
  export default Goods;