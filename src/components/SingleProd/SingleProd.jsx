const SingleProd = ({ data }) => {
  return (
    <div>
      <img
        className="ProductSection__img"
        src={data.strDrinkThumb}
        alt={data.strDrink}
      />
      <div className="ProductSection__head__title">
        <h1>{data.strDrink}</h1>
      </div>
      <div className="ProductSection__info">
        <p>{data.strAlcoholic}</p>
        <p>{data.strCategory}</p>
        <p>{data.strGlass}</p>
      </div>
      <div className="ProductSection__instruction">
        <p>{data.strInstructions}</p>
      </div>
    </div>
  );
};

export default SingleProd;
