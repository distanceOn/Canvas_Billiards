export const createEmptyField = (
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D
) => {
  const { width, height } = canvas;
  context.fillStyle = 'black';
  context.fillRect(0, 0, width, height);
};
