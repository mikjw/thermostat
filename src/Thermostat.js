'use strict';

function Thermostat() {

  this._temperature = 20;
  this._minTemp = 10;
  this._maxTemp = 25;
  this._powerSavingOn = 'green';
}

Thermostat.prototype.current_temp = function() {
  return this._temperature;
}

Thermostat.prototype.increment = function() {
  if (this.current_temp() === this._maxTemp) {
   return;
  } else {
    this._temperature ++;
  }
}

Thermostat.prototype.decrement = function() {
  if (this.current_temp() === this._minTemp) {
   return;
  } else {
    this._temperature --;
  }
}
Thermostat.prototype.isPowerSavingOn = function() {
  return this._powerSavingOn === 'green';
}

Thermostat.prototype.togglePowerSaving = function() {
  if (this._powerSavingOn === 'green') {
    this.turnOffPowerSaving()
  } else if (this._powerSavingOn === 'red') {
    this.turnOnPowerSaving()
  }
};

Thermostat.prototype.turnOffPowerSaving = function() {
  this._powerSavingOn = 'red';
  this._maxTemp = 32;
}

Thermostat.prototype.turnOnPowerSaving = function() {
  this._powerSavingOn = 'green';
  this._maxTemp = 25;
  if (this._temperature > this._maxTemp) {this._temperature = this._maxTemp};
}

Thermostat.prototype.reset = function() {
  this._temperature = 20;
}

Thermostat.prototype.energyUsage = function() {
  if (this._temperature < 18) {
    return 'green';
  } else if (this._temperature < 25) {
    return 'yellow';
  } else {
    return 'red';
  }
}
