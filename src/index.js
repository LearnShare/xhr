import HTTP from './http.js';
import {
  HttpMethod,
} from './enums.js';

const XHR = (req) => new HTTP(req);

XHR.get = (url, req) => {
  const reqConfig = {
    method: HttpMethod.GET,
    ...req,
    url,
  };

  return new HTTP(reqConfig);
};

XHR.post = (url, data, req) => {
  const reqConfig = {
    method: HttpMethod.POST,
    ...req,
    url,
    data,
  };

  return new HTTP(reqConfig);
};

XHR.put = (url, data, req) => {
  const reqConfig = {
    method: HttpMethod.PUT,
    ...req,
    url,
    data,
  };

  return new HTTP(reqConfig);
};

XHR.patch = (url, data, req) => {
  const reqConfig = {
    method: HttpMethod.PATCH,
    ...req,
    url,
    data,
  };

  return new HTTP(reqConfig);
};

XHR.delete = (url, req) => {
  const reqConfig = {
    method: HttpMethod.DELETE,
    ...req,
    url,
  };

  return new HTTP(reqConfig);
};

window.XHR = XHR;

export default XHR;
