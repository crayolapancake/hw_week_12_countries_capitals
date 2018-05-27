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

// publish all data to browser
CountryListView.prototype.renderCountryListView = function (countries) {
  console.log('countries.length');
  countries.forEach((country, index) => {
    const countryListItem = this.createCountryListItem(country.name, index);
    this.container.appendChild(countryListItem);
  });
};


CountryListView.prototype.createCountryListItem = function (countryName, countryId) {
  const aCountryView = document.createElement('li');
  aCountryView.textContent = countryName;
  aCountryView.id = countryId;

  aCountryView.addEventListener('click', (evt) => {
    console.log(evt.target.id);
    PubSub.publish('CountryListView:country-clicked', evt.target.id);
  });
  return aCountryView;
};

module.exports = CountryListView
