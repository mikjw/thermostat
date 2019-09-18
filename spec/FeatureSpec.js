'use strict';

describe('Feature Test:', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('default temperature is set to 20 degrees C', function() {
    it('returns default temperature', function() {
      expect(thermostat.current_temp()).toEqual(20);
    }); 
  });

});