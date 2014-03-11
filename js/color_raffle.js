$(function () {
  var ColorStat = flight.component(function () {
    this.updateColorStat = function (event, data) {
      var count = parseInt(this.$node.text());

      if (this.$node.data('color') == data.color) {
        this.$node.text(count + 4);
      } else {
        this.$node.text(count - 1);
      }
    };

    this.after('initialize', function () {
      this.on(document, 'uiColorSelected', this.updateColorStat);
    });
  });

  var History = flight.component(function () {
    this.updateHistory = function (event, data) {
      this.$node.append('<li>' + data.color + '</li>');
    };

    this.after('initialize', function () {
      this.on(document, 'uiColorSelected', this.updateHistory);
    });
  });


  var colors = ['red', 'green', 'blue'];

  $('.Raffle-trigger').on('click', function () {
    var color = colors[Math.floor(Math.random()*colors.length)];
    $(this).trigger('uiColorSelected', { color: color });
  });

  History.attachTo('.Raffle-history');
  ColorStat.attachTo('.Raffle-colorStat');
});
