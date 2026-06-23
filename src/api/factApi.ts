export const fetchFact = async () => {
  const response = await fetch(
    "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en",
  );

  const data = await response.json();
  return data;
};
