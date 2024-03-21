import { BallsPhysics } from './types';

export const checkBallCollision = ({ ball1, ball2 }: BallsPhysics) => {
  // разность координат между центрами шаров
  const dx = ball1.x - ball2.x;
  const dy = ball1.y - ball2.y;

  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance < ball1.radius + ball2.radius;
};
