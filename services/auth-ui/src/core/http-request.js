import HttpError from './http-error';

const responseInterceptor = async res => {
  if (!res.ok) {
    throw new HttpError(res.status, res.statusText);
  }

  try {
    return await res.json();
  } catch (e) {
    return null;
  }
};

const getFetchParams = params => Object.assign({}, params, {
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json'
  }
});

export async function get(url) {
  const response = await fetch(url, getFetchParams({
    method: 'GET'
  }));

  return responseInterceptor(response);
}

export async function post(url, data) {
  const response = await fetch(url, getFetchParams({
    method: 'POST',
    body: JSON.stringify(data)
  }));

  return responseInterceptor(response);
}

