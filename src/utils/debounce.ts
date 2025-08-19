export default function debounce(fn: (...args: unknown[]) => void, delay: number) {
  let timerId: number;

  return function(this: unknown, ...args: unknown[]) {
    clearTimeout(timerId);

    timerId = setTimeout(fn.bind(this, args), delay);
  };
}