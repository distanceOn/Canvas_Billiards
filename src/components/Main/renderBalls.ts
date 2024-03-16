import { Ball } from '../../utils/types';

export const renderBall = (context: CanvasRenderingContext2D, ball: Ball) => {
  context.fillStyle = ball.color;
  context.beginPath();
  context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  context.fill();
};
export const renderBalls = (
  context: CanvasRenderingContext2D,
  balls: Ball[]
) => {
  balls.forEach(ball => renderBall(context, ball));
};
