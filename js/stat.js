'use strict';

const WHITE_COLOR = `#fff`;
const BLACK_COLOR = `#000`;
const RED_COLOR = `rgba(255, 0, 0, 1)`;
const FONT_STYLE = `16px PT Mono`;
const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 90;
const GAP = 10;
const BAR_GAP = 20;
const FONT_GAP = 15;
const TEXT_HEIGHT = 50;
const BAR_WIDTH = 50;
const barHeight = CLOUD_HEIGHT - BAR_GAP - TEXT_HEIGHT - BAR_GAP * 2;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {

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
  renderCloud(ctx, CLOUD_X, GAP, WHITE_COLOR);

  let maxTime = getMaxElement(times);


  for (let i = 0; i < players.length; i++) {
    let randomSaturation = Math.random() * (i * 25);

    ctx.fillStyle = `hsl(240, ${randomSaturation}%, 50%)`;
    if (players[i] === `Вы`) {
      ctx.fillStyle = RED_COLOR;
    }
    ctx.fillRect(
        CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i,
        CLOUD_Y - ((barHeight * times[i]) / maxTime - barHeight), BAR_WIDTH, (barHeight * times[i]) / maxTime);

    ctx.fillStyle = BLACK_COLOR;
    ctx.fillText(
        players[i],
        CLOUD_X + GAP + FONT_GAP +
      (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT);
    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + GAP + FONT_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y - ((barHeight * times[i]) / maxTime - barHeight) - GAP
    );

  }
  ctx.fillStyle = BLACK_COLOR;
  ctx.font = FONT_STYLE;
  ctx.fillText(`Ура вы победили!`, CLOUD_X + GAP, TEXT_HEIGHT - GAP);
  ctx.fillText(`Список результатов:`, CLOUD_X + GAP, TEXT_HEIGHT + GAP);
};
