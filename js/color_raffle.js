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



  var RaffleTrigger = flight.component(function () {
    this.defaultAttrs({
      colors: ['red', 'green', 'blue']
    });

    this.selectColor = function (event, data) {
      var color = this.attr.colors[Math.floor(Math.random() * this.attr.colors.length)];
      this.trigger('uiColorSelected', { color: color });
    };

    this.after('initialize', function () {
      this.on('click', this.selectColor);
    });
  });

  History.attachTo('.Raffle-history');
  ColorStat.attachTo('.Raffle-colorStat');
  RaffleTrigger.attachTo('.Raffle-trigger');
});
