import { RenderBallType, RenderBallsType } from './types';

export const renderBall = ({ context, ball }: RenderBallType) => {
  context.fillStyle = ball.color;
  context.beginPath();
  context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  context.fill();
};
export const renderBalls = ({ context, balls }: RenderBallsType) => {
  balls.forEach(ball => renderBall({ context, ball }));
};
