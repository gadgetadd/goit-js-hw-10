import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './js/fetchCountries.js';
import { createCountryMarkup, createListMarkup } from './js/createMarkup.js';

const DEBOUNCE_DELAY = 300;
const refs = {
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
  searchBox: document.querySelector('#search-box'),
};

const onSearch = e => {
  if (e.target.value.trim() === '') {
    refs.countryInfo.innerHTML = '';
    refs.countryList.innerHTML = '';
    return;
  }
  fetchCountries(e.target.value.trim())
    .then(showResultPage)
    .catch(() => Notify.failure('Oops, there is no country with that name'));
};

const showResultPage = data => {
    if (data.length > 10) {
    return Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }
  if (data.length === 1) {
    refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = createCountryMarkup(data[0]);
    return;
  }
  refs.countryInfo.innerHTML = '';
  refs.countryList.innerHTML = createListMarkup(data);
};

refs.searchBox.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));
