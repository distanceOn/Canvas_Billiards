import { Ball } from './types';

export const handleMouseDown = (
  canvas: HTMLCanvasElement,
  balls: Ball[],
  event: MouseEvent
) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  balls.forEach(ball => {
    const distance = Math.sqrt((ball.x - mouseX) ** 2 + (ball.y - mouseY) ** 2);
    if (distance < ball.radius) {
      const forceDirection = { x: mouseX - ball.x, y: mouseY - ball.y };
      const forceMagnitude = Math.sqrt(
        forceDirection.x ** 2 + forceDirection.y ** 2
      );
      const forceNormalization = {
        x: forceDirection.x / forceMagnitude,
        y: forceDirection.y / forceMagnitude,
      };

      ball.vx = -forceNormalization.x * 5;
      ball.vy = -forceNormalization.y * 5;
    }
  });
};

export const handleMouseMove = (
  canvas: HTMLCanvasElement,
  balls: Ball[],
  event: MouseEvent
) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;
  let isCursorOverBall = false;

  balls.forEach(ball => {
    const distance = Math.sqrt((ball.x - mouseX) ** 2 + (ball.y - mouseY) ** 2);
    if (distance < ball.radius) {
      isCursorOverBall = true;
    }
  });

  canvas.style.cursor = isCursorOverBall ? 'pointer' : 'default';
};
