import { onMount, For } from "solid-js";
import { useDragScroll } from "../utils/useDragScroll";

const titles = [
  "This changed everything 😳",
  "Bro really did that 💀",
  "I tried this at 3AM",
  "You won’t believe this works",
  "Why nobody talks about this",
  "POV: you discover this too late",
  "This feels illegal",
  "I regret learning this",
];

function ShortsCard() {
  const img = `https://picsum.photos/400/700?random=${Math.floor(
    Math.random() * 1000
  )}`;

  const title = titles[Math.floor(Math.random() * titles.length)];

  return (
    <div
      class="
        relative
        flex-none
        w-40
        h-72
        rounded-xl
        overflow-hidden
        bg-[#181818]
        cursor-pointer
        transition-transform duration-200
        hover:scale-[1.03]
        active:scale-[0.97]
      "
    >
      {/* Thumbnail */}
      <img
        src={img}
        class="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Gradient */}
      <div
        class="
          absolute inset-0
          bg-gradient-to-t
          from-black/90 via-black/30 to-transparent
        "
      />

      {/* Title */}
      <div class="absolute bottom-10 left-2 right-2">
        <p class="text-xs font-semibold leading-snug line-clamp-2">
          {title}
        </p>
      </div>

      {/* Mr. Miyagi */}
      <div class="absolute bottom-2 left-2 right-2">
        <p class="text-[10px] text-[#cccccc] italic">
          — Mr. Miyagi
        </p>
      </div>
    </div>
  );
}

export default function ShortsRow() {
  let ref!: HTMLDivElement;

  onMount(() => useDragScroll(ref));

  return (
    <section class="px-6 py-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-semibold">Shorts</h2>
        <span class="text-sm text-[#aaaaaa]">Swipe</span>
      </div>

      <div
        ref={ref}
        class="
          flex gap-4
          overflow-x-auto
          overflow-y-hidden
          scrollbar-hide
          cursor-grab active:cursor-grabbing
          select-none
        "
      >
        <For each={Array.from({ length: 15 })}>
          {() => <ShortsCard />}
        </For>
      </div>
    </section>
  );
}
