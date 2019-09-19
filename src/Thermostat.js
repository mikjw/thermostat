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
  this._temperature ++;
}

Thermostat.prototype.decrement = function() {
  if (this.current_temp() === this._minTemp) {
   return;
  } else {
    this._temperature --;
  }
}
Thermostat.prototype.isPowerSavingOn = function() {
  return this._powerSavingOn === true;
}

Thermostat.prototype.turnOffPowerSaving = function() {
  this._powerSavingOn = false;
  this._maxTemp = 32;
}

Thermostat.prototype.turnOnPowerSaving = function() {
  this._powerSavingOn = true;
  this._maxTemp = 25;
}

Thermostat.prototype.reset = function() {
  this._temperature = 20;
}

Thermostat.prototype.energyUsage = function() {
  if (this._temperature < 18) {
    return 'Low';
  } else if (this._temperature < 25) {
    return 'Medium';
  } else {  
    return 'High';
  }
}
