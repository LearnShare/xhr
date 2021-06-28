import HTTP from './http.js';
import {
  HttpMethod,
} from './enums.js';

const XHR = (req) => new HTTP(req);

XHR.get = (url, req) => {
  const reqConfig = {
    method: HttpMethod.get,
    ...req,
    url,
  };

  return new HTTP(reqConfig);
};

XHR.post = (url, req) => {
  const reqConfig = {
    method: HttpMethod.post,
    ...req,
    url,
  };

  return new HTTP(reqConfig);
};

XHR.put = (url, req) => {
  const reqConfig = {
    method: HttpMethod.put,
    ...req,
    url,
  };

  return new HTTP(reqConfig);
};

XHR.patch = (url, req) => {
  const reqConfig = {
    method: HttpMethod.patch,
    ...req,
    url,
  };

  return new HTTP(reqConfig);
};

XHR.delete = (url, req) => {
  const reqConfig = {
    method: HttpMethod.delete,
    ...req,
    url,
  };

  return new HTTP(reqConfig);
};

window.XHR = XHR;

export default XHR;
