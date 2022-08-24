type GoodsProps = {
    insideItem: string
  }
  
  function Goods({insideItem}: GoodsProps) : JSX.Element {
    return (
      <div className="property__image-wrapper">
        <img className="property__image" src={insideItem} alt="Фото комнаты"/>
      </div>
    ) ;
  }
  
  export default Goods;