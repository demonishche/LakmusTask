export const createGetUrl = (url, params) => {
  let esc = encodeURIComponent;
  return url + '?' + Object.keys(params)
    .map(k => esc(k) + '=' + esc(params[k]))
    .join('&')
}