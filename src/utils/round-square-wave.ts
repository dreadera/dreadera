export default function roundSquareWave(
  theta: number,
  delta: number,
  x: number,
  y: number,
) {
  return (
    ((2 * x) / Math.PI) * Math.atan(Math.sin(2 * Math.PI * theta * y) / delta)
  );
}
