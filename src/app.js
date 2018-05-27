const Countries = require('./models/countries.js');
const CountryListView = require('./views/country_list_view');
const CapitalView = require('./views/capital_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const countries = new Countries ();
  countries.getData();
  countries.bindEvents();

  const countryListContainer = document.querySelector('#country-list');
  const countryListView = new CountryListView(countryListContainer);
  countryListView.bindEvents();
  console.log('#country-list ');

  const capitalContainer = document.querySelector('#capital-view');
  const capitalView = new CapitalView(capitalContainer);
  capitalView.bindEvents();

});
