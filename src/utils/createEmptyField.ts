import { CanvasContext } from './types';

export const createEmptyField = ({ canvas, context }: CanvasContext) => {
  const { width, height } = canvas;
  context.fillStyle = 'black';
  context.fillRect(0, 0, width, height);
};
