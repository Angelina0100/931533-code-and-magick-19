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

}

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
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP); // 100 + 10 = 110; 10 + 10 = 20
  ctx.fillText('Список результатов: ', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP*2); // 110; 20 + 20 = 40

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + GAP + FONT_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP - GAP);
  }

  var maxTime = getMaxElement(times);
  console.log(maxTime, times);

  var getRandomColor = function () {
    return 'hsl(240, ' + Math.round(Math.random() * 100) + '%, 80%)';
  }


  for (var i = 0; i < times.length; i++) {
    var currentColor = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : getRandomColor();
   /* ctx.fillRect(CLOUD_X + GAP + FONT_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_Y + CLOUD_HEIGHT - FONT_GAP - GAP - GAP, BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);*/
    var title = 50;
    ctx.fillRect(CLOUD_X + GAP + FONT_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - 50 - (BAR_HEIGHT * times[i] / maxTime), BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + FONT_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - BAR_HEIGHT * times[i] / maxTime - FONT_GAP - GAP);
    ctx.fillStyle = currentColor;
    console.log(CLOUD_Y + title + 10 + BAR_HEIGHT - (BAR_HEIGHT * times[i] / maxTime));
  }


}



/*
var getFunct = function () {}
function getFunct() {}

var getFunct = function () {
  for(var i///) {

  }
  return
}

var getFunct = function (a, b, c) {
  for(var i///) {
    a , b, c
  }
}

var getName = function (name) {
  return name.toUpperCase();
}

var cat = {
  name: 'Кошка',
  age: 5,
  getName: function () {
    return this.name;
  }
}
*/
