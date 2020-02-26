export function debounce(func, delazy) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, ...args);
    }, delazy);
  };
}