'use strict';

describe('Feature Test:', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('thermostat temperature functions', function() {
    it('returns default temperature of 20 C', function() {
      expect(thermostat._temperature).toEqual(20);
    });

    it('increases the temperature', function() {
      thermostat.increment();
      expect(thermostat.current_temp()).toEqual(21);
    });

    it('decreases the temperature', function() {
      thermostat.decrement();
      expect(thermostat.current_temp()).toEqual(19);
    });

    it('power saving mode is on by default', function(){
      expect(thermostat.isPowerSavingOn()).toBe(true);
    });
  });
});
