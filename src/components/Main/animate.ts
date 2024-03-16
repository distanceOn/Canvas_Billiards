import { Ball } from '../../utils/types';
import { createEmptyField } from './createEmptyField';
import { renderBall } from './renderBalls';

export const animation = (
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  balls: Ball[]
) => {
  createEmptyField(canvas, context);

  const { width, height } = canvas;

  balls.forEach(ball => {
    // Проверка столкновения с границами и обновление скорости
    if (ball.x + ball.radius > width || ball.x - ball.radius < 0) {
      ball.vx *= -1;
    }
    if (ball.y + ball.radius > height || ball.y - ball.radius < 0) {
      ball.vy *= -1;
    }

    // Обновление позиции
    ball.x += ball.vx;
    ball.y += ball.vy;

    // Замедление шаров (трение)
    ball.vx *= 0.99;
    ball.vy *= 0.99;

    renderBall(context, ball);
  });
};
