// list all countries in browser

const PubSub = require('../helpers/pub_sub.js');
const CapitalView = require('./capital_view.js');

const CountryListView = function (container) {
  this.container = container;
};

CountryListView.prototype.bindEvents = function () {
  PubSub.subscribe ('Countries:Country-data-ready', (evt) => {
    this.renderCountryListView(evt.detail);
  });
  console.log('Countries:Country-data-ready done');
};

CountryListView.prototype.renderCountryListView = function (countries) {
  console.log('countries.length');
  countries.forEach((country, index) => {
    const countryListItem = this.createCountryListItem(country.name, index);
    this.container.appendChild(countryListItem);
  });
};

//i want to publish all data to browser
CountryListView.prototype.createCountryListItem = function (countryName, countryId) {
  const capitalView = document.createElement('li');
  capitalView.textContent = countryName;
  capitalView.id = countryId;

  capitalView.addEventListener('click', (evt) => {
    console.log(evt.target.id);
    PubSub.publish('CountryListView:country-clicked', evt.target.id);
  });
  return capitalView;
};

module.exports = CountryListView
