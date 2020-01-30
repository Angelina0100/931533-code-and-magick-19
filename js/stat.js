var CLOUD_WIDTH = 420
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var TEXT_WIDTH = 50;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (timesArr) {
  var maxElement = timesArr[0];
  for (var i = 0; i < timesArr.length; i++) {
    if (maxElement < timesArr[i]) {
      maxElement = timesArr[i];
    }
  };
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP);
  ctx.fillText('Список результатов: ', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP*2);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + GAP + FONT_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP*3);
  };

  var maxTime = getMaxElement(times);

  var getRandomColor = function () {
    return 'hsl(240, ' + Math.round(Math.random() * 100) + '%, 80%)';
  };


  for (var i = 0; i < times.length; i++) {
    var currentColor = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : getRandomColor();
    ctx.fillStyle = currentColor;
    ctx.fillRect(CLOUD_X + GAP * 3  + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP * 4 - BAR_HEIGHT + (BAR_HEIGHT - BAR_HEIGHT * times[i] / maxTime), BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);
    if (times[i]) {
      ctx.fillStyle = 'black';
    };
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP * 3 + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP * 6 - BAR_HEIGHT + (BAR_HEIGHT - BAR_HEIGHT * times[i] / maxTime));
  };
}
