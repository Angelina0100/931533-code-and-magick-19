/*
var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 200;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i, (barWidth * times[i]) / maxTime, BAR_HEIGHT);
  }
};
*/


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

  function getMaxElement (timesArr) {
    var maxElement = timesArr[0];
    for (var i = 0; i < timesArr.lenth; i++) {
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

  /* if (names[0]) {
    ctx.fillText(CLOUD_X + GAP, CLOUD_Y + CLOUD_HEIGHT - GAP);
  } else if (names[1]) {
    ctx.fillTex(CLOUD_X + GAP + BAR_WIDTH + BAR_GAP, CLOUD_Y + CLOUD_HEIGHT - GAP);
  } else if (names[2]) {
    ctx.fillText(CLOUD_X + GAP + BAR_WIDTH + BAR_GAP + BAR_WIDTH + BAR_GAP, CLOUD_Y + CLOUD_HEIGHT - GAP); // (BAR_WIDTH + BAR_GAP)(1 + 1) + (CLOUD_X + GAP)
  } else if (names[3]) {
    ctx.fillText(CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * 3, CLOUD_Y + CLOUD_HEIGHT - GAP);
  }
  */
  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + GAP + FONT_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP - GAP);
  }

  var maxTime = getMaxElement(times);

  for (var j = 0; j < times.length; j++) {
    for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, Math.round(Math.random() * 100) + %, Math.round(Math.random() * 100) + %)'; //поправить цвет
    }
  }
    ctx.fillRect(CLOUD_X + GAP + FONT_GAP + (BAR_WIDTH + BAR_GAP) * j, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP - GAP - GAP, BAR_WIDTH, BAR_HEIGHT * times[j] / maxTime);
    ctx.fillText(Math.round(times[j]), CLOUD_X + GAP + FONT_GAP + (BAR_WIDTH + BAR_GAP) * j, CLOUD_HEIGHT - BAR_HEIGHT * times[j] / maxTime - FONT_GAP - GAP);
  }


  var max = times[0];
  function getMax (timesArr) {
    for (var i = 0; i < timesArr.lenth; i++) {
      if (max < timesArr[i]) {
        max = timesArr[i];
      }
    };
  };
  getMax (times);
/*
  function getColor (namesArr) {
    for (var i = 0; i < namesArr.length; i++) {
      if (namesArr === 'Вы') {
        return rgba(255, 0, 0, 1);
      } else {
        return hsl(240, Math.round(Math.random() * 100), Math.round(Math.random() * 100));
      }
    }
  }
  getColor(names);
*/
}

