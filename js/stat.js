'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 90;
var GAP = 10;
var BAR_GAP = 20;
var FONT_GAP = 15;
var TEXT_HEIGHT = 50;
var BAR_WIDTH = 50;
var barHeight = CLOUD_HEIGHT - BAR_GAP - TEXT_HEIGHT - BAR_GAP * 2;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {

  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, GAP * 2, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, GAP, `#fff`);

  let maxTime = getMaxElement(times);


  for (let i = 0; i < players.length; i++) {
    let randomSaturation = Math.random() * (i * 25);

    ctx.fillStyle = `hsl(240, ${randomSaturation}%, 50%)`;
    if (players[i] === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    }
    ctx.fillRect(
        CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i,
        CLOUD_Y - ((barHeight * times[i]) / maxTime - barHeight), BAR_WIDTH, (barHeight * times[i]) / maxTime);

    ctx.fillStyle = `#000`;
    ctx.fillText(
        players[i],
        CLOUD_X + GAP + FONT_GAP +
      (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT);
    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + GAP + FONT_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y - ((barHeight * times[i]) / maxTime - barHeight) - GAP
    );

  }
  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  ctx.fillText(`Ура вы победили!`, 110, 40);
  ctx.fillText(`Список результатов:`, 110, 60);
};
