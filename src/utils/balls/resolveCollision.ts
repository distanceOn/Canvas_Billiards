import { BallsPhysics } from './types';

export const resolveCollision = ({ ball1, ball2 }: BallsPhysics) => {
  // разность координат между центрами шаров
  const dx = ball1.x - ball2.x;
  const dy = ball1.y - ball2.y;

  // угол столкновения
  const collisionAngle = Math.atan2(dy, dx);
  //начальные скорости шаров
  const magnitude1 = Math.sqrt(ball1.vx * ball1.vx + ball1.vy * ball1.vy);
  const magnitude2 = Math.sqrt(ball2.vx * ball2.vx + ball2.vy * ball2.vy);
  //направление скоростей шаров
  const direction1 = Math.atan2(ball1.vy, ball1.vx);
  const direction2 = Math.atan2(ball2.vy, ball2.vx);
  // проецирование скорости на линию столкновения
  const velocityX1 = magnitude1 * Math.cos(direction1 - collisionAngle);
  const velocityY1 = magnitude1 * Math.sin(direction1 - collisionAngle);
  const velocityX2 = magnitude2 * Math.cos(direction2 - collisionAngle);
  const velocityY2 = magnitude2 * Math.sin(direction2 - collisionAngle);
  // скорость после столкновения с учетом потери энергии
  const finalVelocityX1 = (velocityX1 * (1 - 0.9) + velocityX2 * 2 * 0.9) / 2;
  const finalVelocityX2 = (velocityX2 * (1 - 0.9) + velocityX1 * 2 * 0.9) / 2;

  //скорости в глобальные координаты
  ball1.vx =
    Math.cos(collisionAngle) * finalVelocityX1 +
    Math.cos(collisionAngle + Math.PI / 2) * velocityY1;
  ball1.vy =
    Math.sin(collisionAngle) * finalVelocityX1 +
    Math.sin(collisionAngle + Math.PI / 2) * velocityY1;
  ball2.vx =
    Math.cos(collisionAngle) * finalVelocityX2 +
    Math.cos(collisionAngle + Math.PI / 2) * velocityY2;
  ball2.vy =
    Math.sin(collisionAngle) * finalVelocityX2 +
    Math.sin(collisionAngle + Math.PI / 2) * velocityY2;

  // отделение шаров друг от друга после столкновения
  const overlap =
    0.5 * (Math.sqrt(dx * dx + dy * dy) - ball1.radius - ball2.radius);
  ball1.x -= overlap * (dx / Math.sqrt(dx * dx + dy * dy));
  ball1.y -= overlap * (dy / Math.sqrt(dx * dx + dy * dy));
  ball2.x += overlap * (dx / Math.sqrt(dx * dx + dy * dy));
  ball2.y += overlap * (dy / Math.sqrt(dx * dx + dy * dy));

  // потерям скорости после столкновения для шаров
  ball1.vx *= 0.95;
  ball1.vy *= 0.95;
  ball2.vx *= 0.95;
  ball2.vy *= 0.95;
};
