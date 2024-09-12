export async function fetchData(url, query) {
  const response = await fetch(
    `${url}${query}`,
  );
  if (!response.ok) {
    throw Error('An error occured when fetching data from ${url}.');
  }
  return await response.json();
}