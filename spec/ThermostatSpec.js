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
  });
});
