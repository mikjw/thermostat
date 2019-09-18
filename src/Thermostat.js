'use strict';

function Thermostat() {

  this._temperature = 20;
}

Thermostat.prototype.current_temp = function() {
  return this._temperature;
}
