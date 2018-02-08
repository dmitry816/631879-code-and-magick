'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var GAP = 10;
var CLOUD_X = 100;
var CLOUD_Y = 10;

var MAX_BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var TEXT_HEIGHT = 20;
var USER_COLOR = 'rgba(255, 0, 0, 1)';
var BLACK_COLOR = '#000';
var WHITE_COLOR = '#fff';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var TEXT_X = 30;
var TEXT_Y = 30;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, string, x, y, color) {
  ctx.fillStyle = color;
  ctx.font = '16px PT Mono';
  ctx.fillText(string, CLOUD_X + x, CLOUD_Y + y);
};

var getMaxElement = function (times) {
  for (var i = 0; i < times.length; i++) {
    var maxElement = times[0];
    if (times[i] > maxElement) {
      maxElement = times[i];
    }
  }
  return maxElement;
};

var getBarsColor = function (name) {
  if (name === 'Вы') {
    return USER_COLOR;
  } else {
    return 'rgba(0, 0, 255, ' + Math.random() * (1 - 0.1) + ')';
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, WHITE_COLOR);
  renderText(ctx, 'Ура вы победили!', TEXT_X, TEXT_Y, BLACK_COLOR);
  renderText(ctx, 'Список результатов:', TEXT_X, TEXT_Y + TEXT_HEIGHT, BLACK_COLOR);
  var maxTime = getMaxElement(times);
  ctx.fillStyle = BLACK_COLOR;
  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = getBarsColor(names[i]);
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - GAP);
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, TEXT_Y * 3 + MAX_BAR_HEIGHT - (MAX_BAR_HEIGHT * times[i]) / maxTime, BAR_WIDTH, (MAX_BAR_HEIGHT * times[i]) / maxTime);
  }
};
