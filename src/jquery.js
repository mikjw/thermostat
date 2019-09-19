runJQuery = function() {

  $(document).ready(function() {

    thermostat = new Thermostat();

    function UpdatePage(){
      $("#energy-usage-display").css({color: thermostat.energyUsage()});
      $("#temperature").html(thermostat._temperature + '&#176 C');
      $("#power-saving-display").css({backgroundColor: thermostat._powerSavingOn})
    };

    UpdatePage();

    $('#power-saving-display').on('click', function(){
      thermostat.togglePowerSaving();
      UpdatePage();
    });

    $('#increment').on('click', function(){
      thermostat.increment();
    UpdatePage ();
    });

    $('#decrement').on('click', function(){
      thermostat.decrement();
    UpdatePage ();
    });

    $('#reset').on('click', function(){
      thermostat.reset();
    UpdatePage ();
    });

  })
}
