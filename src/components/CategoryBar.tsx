import { onMount, onCleanup } from "solid-js";

export default function CategoryBar() {
  let wrapper!: HTMLDivElement;

  let isDragging = false;
  let startX = 0;
  let startScrollLeft = 0;

  onMount(() => {
    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      startX = e.clientX;
      startScrollLeft = wrapper.scrollLeft;
      wrapper.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      wrapper.scrollLeft = startScrollLeft - dx;
    };

    const stopDrag = (e: PointerEvent) => {
      isDragging = false;
      wrapper.releasePointerCapture(e.pointerId);
    };

    wrapper.addEventListener("pointerdown", onPointerDown);
    wrapper.addEventListener("pointermove", onPointerMove);
    wrapper.addEventListener("pointerup", stopDrag);
    wrapper.addEventListener("pointerleave", stopDrag);
    wrapper.addEventListener("pointercancel", stopDrag);

    onCleanup(() => {
      wrapper.removeEventListener("pointerdown", onPointerDown);
      wrapper.removeEventListener("pointermove", onPointerMove);
      wrapper.removeEventListener("pointerup", stopDrag);
      wrapper.removeEventListener("pointerleave", stopDrag);
      wrapper.removeEventListener("pointercancel", stopDrag);
    });
  });

  const categories = ["All","Gaming","Music","Mixes","Tower defense games","APIs","AI","Clash Royale","Mods","Source code","Security","Backend","Frontend","DevOps","Open source","Linux","Databases","Cloud","System Design",
  ];

 return (
  <div
    ref={wrapper}
    class="
      w-full
      overflow-x-auto
      px-6 py-3
      bg-[#0f0f0f]
      cursor-grab active:cursor-grabbing
      touch-pan-x
      select-none  /* Prevent text selection while dragging */
      scrollbar-hide /* Hide scrollbar for cleaner look */
    "
  >
    <div class="flex gap-3 w-max">
      {categories.map((cat) => (
        <div
          class="
            px-4 py-1.5
            rounded-lg
            bg-[#272727]
            hover:bg-[#3a3a3a]
            text-sm
            whitespace-nowrap
          "
        >
          {cat}
        </div>
      ))}
    </div>
  </div>
);
}
