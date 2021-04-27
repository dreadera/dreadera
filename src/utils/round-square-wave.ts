export default function roundSquareWave(theta: number, delta: number, x: number, y: number): number {
  const square: number = (2 * x) / Math.PI;

  const wave: number = Math.sin(2 * Math.PI * theta * y) / delta;
  const arc: number = Math.atan(wave);

  return square * arc;
}
