// Shared cubic-bézier easings, typed as 4-tuples so Motion's `Easing` type
// accepts them under strict TypeScript.
type Bezier = [number, number, number, number];

export const ease = {
  out: [0.22, 1, 0.36, 1] as Bezier,
  inOut: [0.25, 0.1, 0.25, 1] as Bezier,
  standard: [0.4, 0, 0.2, 1] as Bezier,
};
