/* eslint-disable no-undef */
const getData = (api) =>
  fetch(api)
    .then((response) => response.json())
    .then((response) => response)
    .catch((error) => error);

export default getData;
