const fetchData = async () => {
  const data = await fetch("../data.json");
  const json = await data.json();
  return json;
};

export { fetchData };
