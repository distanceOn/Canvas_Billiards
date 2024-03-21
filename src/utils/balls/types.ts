import { Ball } from '../types';

export type BallsPhysics = {
  ball1: Ball;
  ball2: Ball;
};

export type RenderBallType = {
  context: CanvasRenderingContext2D;
  ball: Ball;
};
export type RenderBallsType = {
  context: CanvasRenderingContext2D;
  balls: Ball[];
};
