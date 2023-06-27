export const GET = async (endpoint) => {
  const res = await fetch(endpoint)
    .then((data) => data.json())
    .then((data) => data);

  return res;
};
