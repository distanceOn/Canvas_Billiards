export interface Ball {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
}

export interface CanvasContext {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
}

export type Animation = CanvasContext & {
  balls: Ball[];
};

export type HandleMouseDownType = {
  canvas: HTMLCanvasElement;
  balls: Ball[];
  event: MouseEvent;
};
