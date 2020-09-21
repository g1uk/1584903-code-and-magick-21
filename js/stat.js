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

window.renderStatistics = function (ctx) {
  renderCloud(ctx, CLOUD_X + GAP, GAP * 2, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, GAP, `#fff`);

  // var playerIndex = 0;
  // var playerName = 'Вы';

  let players = [`Вы`, `Кекс`, `Макс`, `Ира`];

  for (let i = 0; i < players.length; i++) {
    ctx.fillStyle = `#000`;
    ctx.fillText(
        players[i],
        CLOUD_X + GAP + FONT_GAP +
      (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT);
    if (players[i] === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    } else {
      ctx.fillStyle = `hsl(240, 100%, ${i * 17}%)`;
    }
    ctx.fillRect(
        CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i,
        CLOUD_Y, BAR_WIDTH, barHeight
    );
  }

  // ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  // ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH)*playerIndex, CLOUD_Y, BAR_WIDTH, barHeight);

  // ctx.fillStyle = 'hsl(240, 100%, 50%)';
  // ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH), CLOUD_Y, BAR_WIDTH, barHeight);

  // ctx.fillStyle = 'hsl(240, 100%, 25%)';
  // ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH)*2, CLOUD_Y, BAR_WIDTH, barHeight);

  // ctx.fillStyle = 'hsl(240, 100%, 75%)';
  // ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH)*3, CLOUD_Y, BAR_WIDTH, barHeight);

  // ctx.fillStyle = '#000';
  // ctx.fillText(playerName, CLOUD_X + GAP + FONT_GAP + (BAR_GAP + BAR_WIDTH)*playerIndex, CLOUD_HEIGHT);
  // ctx.fillText('Кекс', CLOUD_X + GAP + FONT_GAP + (BAR_GAP + BAR_WIDTH), CLOUD_HEIGHT);
  // ctx.fillText('Макс', CLOUD_X + GAP + FONT_GAP + (BAR_GAP + BAR_WIDTH)*2, CLOUD_HEIGHT);
  // ctx.fillText('Ира', CLOUD_X + GAP + FONT_GAP + (BAR_GAP + BAR_WIDTH)*3, CLOUD_HEIGHT);
  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  ctx.fillText(`Ура вы победили!`, 110, 40);
  ctx.fillText(`Список результатов:`, 110, 60);
};
