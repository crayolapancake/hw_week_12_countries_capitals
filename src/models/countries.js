// list all countries in browser


const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Countries = function () {
  this.countriesData = [];
};

Countries.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://restcountries.eu/rest/v2/all')
  requestHelper.get((data) => {
    this.countriesData = data;
    console.log(`data loaded ${data.length}`);
    PubSub.publish('Countries:Country-data-ready', data);
  });

};

Countries.prototype.bindEvents = function () {
  PubSub.subscribe('CountryListView:country-clicked', (evt) => {
    //get all info from this countryName
    console.log(`CountryListView:country-clicked ${evt.detail}`);
    const individualCountry = this.countriesData[evt.detail];
    
    PubSub.publish('Countries:individual-country', individualCountry);

  });
};

module.exports = Countries;
