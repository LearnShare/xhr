import {
  HttpMethod,
} from './enums.js';

import {
  parseQuery,
  parseData,
} from './utils.js';

class HTTP {
  constructor(req) {
    this.xhr = new XMLHttpRequest();
    return this.send(req);
  }

  send(req) {
    const {
      method = HttpMethod.GET,
      url,
      headers = null,
      query = null,
      data = null,
      timeout = 0,
    } = req;

    this.xhr.timeout = timeout;

    const reqUrl = parseQuery(url, query);
    const {
      reqHeaders,
      reqData,
    } = parseData(headers, data);

    return new Promise((resolve, reject) => {
      this.xhr.onload = () => {
        const {
          status,
          response,
        } = this.xhr;

        const resType = this.xhr.getResponseHeader('Content-Type');

        const data = resType.includes('application/json')
          ? JSON.parse(response)
          : response;

        if ((status >= 200
          && status < 300)
            || status === 304) {
          resolve({
            status,
            data,
          });
        } else {
          // TODO return error
          reject({
            status,
            data,
          });
        }
      };

      // TODO return error
      this.xhr.onerror = reject;
      this.xhr.ontimeout = reject;

      this.xhr.open(method, reqUrl, true);
      this.setHeaders(reqHeaders);

      this.xhr.send(reqData);
    });
  }

  setHeaders(headers) {
    if (!headers) {
      return;
    }

    for (const key in headers) {
      this.xhr.setRequestHeader(key, headers[key]);
    }
  }
}

export default HTTP;
