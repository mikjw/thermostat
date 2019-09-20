runJQuery = function () {

  $(document).ready(function () {

    $.get("http://localhost:4567/", function (data) {
      $("#power-saving-display").css({ backgroundColor: data.powerSaving });
      $("#temperature").html(data.temperature + '&#176 C');
    })

    thermostat = new Thermostat();

    function UpdatePage() {
      $("#energy-usage-display").css({ color: thermostat.energyUsage() });
      $("#temperature").html(thermostat._temperature + '&#176 C');
      $("#power-saving-display").css({ backgroundColor: thermostat._powerSavingOn })

      // $.post("/thermostat", { temperature: thermostat._temperature })
    };

    UpdatePage();

    $('#power-saving-display').on('click', function () {
      thermostat.togglePowerSaving();
      UpdatePage();
    });

    $('#increment').on('click', function () {
      thermostat.increment();
      UpdatePage();
    });

    $('#decrement').on('click', function () {
      thermostat.decrement();
      UpdatePage();
    });

    $('#reset').on('click', function () {
      thermostat.reset();
      UpdatePage();
    });

  })
}

