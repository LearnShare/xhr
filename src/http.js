import {
  HttpMethod,
} from './enums.js';

import {
  parseQuery,
} from './utils.js';

class HTTP {
  constructor(req) {
    this.xhr = new XMLHttpRequest();
    return this.send(req);
  }

  // TODO auto set Content-Type for data
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

    return new Promise((resolve, reject) => {
      this.xhr.onload = () => {
        const {
          status,
          responseType,
          response,
        } = this.xhr;

        if ((status >= 200
          && status < 300)
            || status === 304) {
          // TODO return HttpResponse
          resolve({
            status,
            type: responseType,
            response,
          });
        } else {
          // TODO return error
          reject({
            status,
            type: responseType,
            response,
          });
        }
      };

      this.xhr.onerror = reject;
      this.xhr.ontimeout = reject;

      this.xhr.open(method, reqUrl, true);
      this.setHeaders(headers);

      this.xhr.send(data);
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
