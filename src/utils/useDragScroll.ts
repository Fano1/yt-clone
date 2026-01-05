import { onCleanup } from "solid-js";

export function useDragScroll(el: HTMLElement) {
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const down = (e: PointerEvent) => {
    isDown = true;
    el.setPointerCapture(e.pointerId);
    startX = e.clientX;
    scrollLeft = el.scrollLeft;
  };

  const move = (e: PointerEvent) => {
    if (!isDown) return;
    const dx = e.clientX - startX;
    el.scrollLeft = scrollLeft - dx;
  };

  const up = (e: PointerEvent) => {
    isDown = false;
    el.releasePointerCapture(e.pointerId);
  };

  el.addEventListener("pointerdown", down);
  el.addEventListener("pointermove", move);
  el.addEventListener("pointerup", up);
  el.addEventListener("pointercancel", up);

  onCleanup(() => {
    el.removeEventListener("pointerdown", down);
    el.removeEventListener("pointermove", move);
    el.removeEventListener("pointerup", up);
    el.removeEventListener("pointercancel", up);
  });
}
