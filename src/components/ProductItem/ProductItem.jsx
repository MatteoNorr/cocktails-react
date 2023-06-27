import "./index.css";

const ProductItem = ({ data }) => {
  return (
    <div className="ProductItem">
      <img className="ProductItem__img" src={data.strDrinkThumb} />
      <p className="ProductItem__title">{data.strDrink}</p>
    </div>
  );
};

export default ProductItem;
