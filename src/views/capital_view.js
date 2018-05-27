const PubSub = require('../helpers/pub_sub.js');

const CapitalView = function (ulContainer) {
  this.ulContainer = ulContainer //will be ul #capital-view element
};

CapitalView.prototype.bindEvents = function () {
  PubSub.subscribe ('Countries:individual-country', (evt) => {
    this.renderCapitalView(evt.detail);
  });
};

CapitalView.prototype.renderCapitalView = function (country) {
  this.ulContainer.liElement =' ';

  const countryCapital = document.createElement('li');
  countryCapital.textContent = `Country ${country.name} has the capital ${country.capital}`
};



module.exports = CapitalView;
