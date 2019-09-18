'use strict';

describe('Feature Test:', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('thermostat temperature functions', function() {
    it('returns default temperature of 20 C', function() {
      expect(thermostat.current_temp()).toEqual(20);
    });

    it('increases the temperature', function() {
      thermostat.increment();
      expect(thermostat.current_temp()).toEqual(21);
    });

    it('decreases the temperature', function() {
      thermostat.decrement();
      expect(thermostat.current_temp()).toEqual(19);
    });

    it('will not decrease temperature below minimum', function() {
      for (var i = 0; i < 10; i ++) {
        thermostat.decrement();
      }
      console.log(thermostat.current_temp());
      expect(function() { thermostat.decrement();}).toThrowError('Minimum temperature reached');
    });
  });
});
