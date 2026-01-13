import { onMount, onCleanup, createSignal } from "solid-js";

export default function CategoryBar() {
  let wrapper!: HTMLDivElement;

  let isDown = false;
  let hasMoved = false;
  let startX = 0;
  let startScrollLeft = 0;

  const DRAG_THRESHOLD = 5;
  const [selected, setSelected] = createSignal("All");

  onMount(() => {
    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      hasMoved = false;
      startX = e.pageX;
      startScrollLeft = wrapper.scrollLeft;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;

      const dx = e.pageX - startX;
      if (Math.abs(dx) > DRAG_THRESHOLD) {
        hasMoved = true;
      }

      if (hasMoved) {
        wrapper.scrollLeft = startScrollLeft - dx;
      }
    };

    const onMouseUp = () => {
      isDown = false;
    };

    wrapper.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    onCleanup(() => {
      wrapper.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    });
  });

  const categories = [
    "All","Gaming","Music","Mixes","Tower defense games","APIs","AI",
    "Clash Royale","Mods","Source code","Security","Backend","Frontend",
    "DevOps","Open source","Linux","Databases","Cloud","System Design",
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
        select-none
        scrollbar-hide
      "
    >
      <div class="flex gap-3 w-max">
        {categories.map((cat) => {
          const isActive = () => selected() === cat;

          return (
            <div
              onClick={() => {
                if (!hasMoved) {
                  setSelected(cat);
                }
              }}
              class={`
                px-4 py-1.5
                rounded-lg
                text-sm font-semibold
                whitespace-nowrap
                cursor-pointer
                transition-colors duration-150
                ${
                  isActive()
                    ? "bg-white text-black"
                    : "bg-[#272727] text-white hover:bg-[#3a3a3a]"
                }
              `}
            >
              {cat}
            </div>
          );
        })}
      </div>
    </div>
  );
}
