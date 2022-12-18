export const httpService = options => {
  const { url, method, body, headers } = options;

  return fetch(url, {
    method,
    body,
    headers,
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Something went wrong');
  });
};
