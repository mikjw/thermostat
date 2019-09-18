'use strict';

function Thermostat() {

  this._temperature = 20;
  this._minTemp = 10;
  this._maxTemp = 25;
  this._powerSavingOn = true;
}

Thermostat.prototype.current_temp = function() {
  return this._temperature;
}

Thermostat.prototype.increment = function() {
  this._temperature += 1;
}

Thermostat.prototype.decrement = function() {
  if (this.current_temp() === this._minTemp) {
    throw new Error("Minimum temperature reached");
  } else {
    this._temperature -= 1;
  };
};
Thermostat.prototype.isPowerSavingOn = function() {
  return this._powerSavingOn === true;
};

Thermostat.prototype.turnOffPowerSaving = function() {
  this._powerSavingOn = false;
};

// Thermostat.prototype.powerSavingOn = function() {
//   return this._maxTemp = 25;
// };
