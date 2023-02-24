createCountryMarkup, createListMarkup;
export function createCountryMarkup({
  name: { official },
  capital,
  population,
  flags: { svg },
  languages,
}) {
  const languageString = Object.values(languages).join(', ');

  return `
    <h2 class="country-title">
        <img src="${svg}" width="36px" height="36px" alt="${official}">
        ${official}
    </h2>
    <p class="country-content"><b>Capital: </b>${capital}</p>
    <p class="country-content"><b>Population: </b>${population}</p>
    <p class="country-content"><b>Languages: </b>${languageString}</p>
    `;
}

export function createListMarkup(countries) {
  return countries.reduce((markup, { name: { official }, flags: { svg } }) => {
    return (markup += `
        <li><p class="country-item">
            <img src="${svg}" width="20px" height="20px" alt="${official}">              
            ${official}
        </p></li>`);
  }, '');
}
