export const DrinkChoice = ({ drink }) => {
  return (
    <>
      <h3>You have chosen: {drink.name}</h3>
      <img src={drink.imgUrl} alt={drink.alt} width="100" height="100" />
      <p>Your drink will be ready in a few minutes</p>
    </>
  );
};
