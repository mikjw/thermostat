'use strict';

describe('Thermostat', function(){
  var thermostat


  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('temperature settings', function(){
    it('increases the temeperature by 1 C', function(){
      thermostat.increment();
      expect(thermostat.current_temp()).toEqual(21);
    });

    it('decreases the temeperature by 1 C', function(){
      thermostat.decrement();
      expect(thermostat.current_temp()).toEqual(19);
    });

    it('will not decrease temperature below minimum', function() {
      for (var i = 0; i < 11; i ++) {
        thermostat.decrement();
      };
      expect(thermostat._temperature).toEqual(10);
    });

    it('turns power saving off', function(){
      thermostat.turnOffPowerSaving();
      expect(thermostat.isPowerSavingOn()).toBe(false);
      expect(thermostat._maxTemp).toEqual(32);
    });

    it('turns power saving on', function(){
      thermostat.turnOnPowerSaving();
      expect(thermostat.isPowerSavingOn()).toBe(true);
      expect(thermostat._maxTemp).toEqual(25);
    });

    it('resets current temperature to 20', function() {
      thermostat.increment();
      expect(thermostat.current_temp()).toEqual(21);
      thermostat.reset();
      expect(thermostat.current_temp()).toEqual(20);
    })

    it('returns low usage for temperatures below 18', function() {
      for (var i = 0; i < 3; i ++) {
        thermostat.decrement();
      }
      expect(thermostat.current_temp()).toEqual(17);
      expect(thermostat.energyUsage()).toEqual('green');
    })

    it('returns medium usage for temperatures between 18 and 25', function() {
      expect(thermostat.energyUsage()).toEqual('#ffbf00');
    })

    it('returns high usage for temperatures above 24', function() {
      for (var i = 0; i < 5; i ++) {
        thermostat.increment();
      }
      expect(thermostat.current_temp()).toEqual(25);
      expect(thermostat.energyUsage()).toEqual('red');
    })
  });
});
