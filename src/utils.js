export function parseQuery(url, query) {
  if (!query) {
    return url;
  }

  const queryList = [];

  for (const key in query) {
    queryList.push(`${key}=${query[key]}`);
  }

  return `${url}?${queryList.join('&')}`;
}
