// fetchAPI.js

async function fetchFromApi(endpoint, options = {}) {
  const url = `http://localhost:3001/${endpoint}`;

  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  const settings = {
    method: 'GET',
    headers: { ...defaultHeaders, ...options.headers },
    ...options,
  };

  if (options.body) {
    settings.body = JSON.stringify(options.body);
  }

  try {
    const response = await fetch(url, settings);
    console.log('response', response);

    if (!response.ok) {
      throw new Error('Failed to fetch data from the API');
    }

    return await response.json();
  } catch (error) {
    console.error('An error occurred while fetching data:', error);
    console.error('Error name:', error.name);
    throw error;
  }
}

export default fetchFromApi;
