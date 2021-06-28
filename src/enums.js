const methods = [
  'GET',
  'POST',
  'PUT',
  'PATCH',
  'DELETE',
];

export const HttpMethod = {};

methods.forEach((method) => {
  HttpMethod[method] = method;
});
