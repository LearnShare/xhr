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

export function parseData(headers, data) {
  const reqHeaders = headers === null
    ? {}
    : headers;

  let reqData = null;

  if (data !== null
      && typeof data === 'object'
      && !(data instanceof FormData)) {
    reqHeaders['Content-Type'] = 'application/json';
    reqData = JSON.stringify(data);
  } else {
    reqData = data;
  }

  return {
    reqHeaders,
    reqData,
  };
}
