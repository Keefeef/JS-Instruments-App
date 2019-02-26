const PubSub = require('./helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function() {
  PubSub.publish('Instruments:all-instruments-ready', this.data);

  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    this.showInstrumentDetail = function(selectedIndex)
  });
};

InstrumentFamilies.prototype.showInstrumentDetail = function(instrumentIndex){
  const selectedInstrument = this.data[instrumentIndex];
  PubSub.publish('Instrument:selected-instrument-ready', selectedInstrument);
};





module.exports = InstrumentFamilies;
