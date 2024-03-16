import React, { useRef, useEffect } from 'react';

import S from './BilliardField.module.scss';
import { balls } from '../../utils/balls/balls';
import { handleMouseDown } from '../../utils/handleMouseDown';
import { createEmptyField } from '../../utils/createEmptyField';
import { renderBalls } from '../../utils/balls/renderBalls';
import { animation } from '../../utils/animation';

const BilliardField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (canvas && context) {
      createEmptyField({ canvas, context });
      renderBalls({ context, balls });

      const handleMouseDownReady = handleMouseDown.bind(null, canvas, balls);
      canvas.addEventListener('mousedown', handleMouseDownReady);

      // Запуск анимации
      const animate = () => {
        animation({ canvas, context, balls });
        requestAnimationFrame(animate); // Повторение анимации
      };
      animate();

      // Очистка: удаление обработчика событий
      return () =>
        canvas.removeEventListener('mousedown', handleMouseDownReady);
    }
  }, []);

  return (
    <div className={S.container}>
      <canvas ref={canvasRef} className={S.canvas} width={800} height={500} />;
    </div>
  );
};

export default BilliardField;
