import { checkBallCollision } from './balls/checkBallCollision';
import { renderBall } from './balls/renderBalls';
import { resolveCollision } from './balls/resolveCollision';
import { createEmptyField } from './createEmptyField';
import { Animation } from './types';

export const animation = ({ canvas, context, balls }: Animation) => {
  createEmptyField({ canvas, context });

  const { width, height } = canvas;

  balls.forEach((ball, index) => {
    for (let j = index + 1; j < balls.length; j++) {
      const otherBall = balls[j];
      const resultBalls = { ball1: ball, ball2: otherBall };
      if (checkBallCollision(resultBalls)) {
        resolveCollision(resultBalls);
      }
    }
    // Проверка столкновения с границами и обновление скорости
    if (ball.x + ball.radius > width || ball.x - ball.radius < 0) {
      ball.vx *= -1 * 0.95;
    }
    if (ball.y + ball.radius > height || ball.y - ball.radius < 0) {
      ball.vy *= -1 * 0.95;
    }

    const minVelocity = 0.1;
    if (Math.abs(ball.vx) < minVelocity) ball.vx = 0;
    if (Math.abs(ball.vy) < minVelocity) ball.vy = 0;

    // Обновление позиции
    ball.x += ball.vx;
    ball.y += ball.vy;

    // Замедление шаров (трение)
    ball.vx *= 0.99;
    ball.vy *= 0.99;

    renderBall({ context, ball });
  });
};
