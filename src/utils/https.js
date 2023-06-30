const BASE__URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php";

export const GET = async (endpoint) => {
  const res = await fetch(BASE__URL + endpoint)
    .then((data) => data.json())
    .then((data) => data);

  return res;
};
