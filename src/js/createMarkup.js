createCountryMarkup, createListMarkup;
export function createCountryMarkup({
  name: { official },
  capital,
  population,
  flags: { svg },
  languages,
}) {
  return `
    <h2>
        <img src="${svg}" width="32px" height="32px" alt="${official}">
        ${official}
    </h2>
    <p><span>Capital: </span>${capital}</p>
    <p><span>Population: </span>${population}</p>
    <p><span>Languages: </span>${languages}</p>
    `;
}

export function createListMarkup(countries) {
  return countries.reduce((markup, { name: { official }, flags: { svg } }) => {
    return (markup += `
        <li><h2>
            <img src="${svg}" width="32px" height="32px" alt="${official}">              
            ${official}
        </h2></li>`);
  }, '');
}
