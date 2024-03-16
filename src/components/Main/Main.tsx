import React, { useRef, useEffect } from 'react';

import S from './Main.module.scss';
import { balls } from '../../contants/balls';

const BilliardField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (context) {
      const { width, height } = canvas;

      // Отрисовка поля
      context.fillStyle = 'black';
      context.fillRect(0, 0, width, height);

      // Отрисовка шаров
      balls.forEach(ball => {
        context.fillStyle = ball.color;
        context.beginPath();
        context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        context.fill();
      });
    }
  }, [canvasRef]);

  return (
    <div className={S.container}>
      <canvas ref={canvasRef} className={S.canvas} width={800} height={500} />;
    </div>
  );
};

export default BilliardField;
