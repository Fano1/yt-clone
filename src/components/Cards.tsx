import { For } from "solid-js";

function VideoCard() {
  return (
    <div class="flex flex-col gap-2 cursor-pointer">

      <div class="aspect-video bg-gray-700 rounded-xl"></div>

      <div class="flex gap-3">
        <div class="w-9 h-9 rounded-full bg-gray-600"></div>

        <div class="flex flex-col gap-1 flex-1">
          <div class="h-4 bg-gray-600 rounded w-full"></div>
          <div class="h-3 bg-gray-500 rounded w-4/5"></div>
          <div class="h-3 bg-gray-500 rounded w-3/5"></div>
        </div>
      </div>

    </div>
  );
}

export default function Cards() {
  return (
    <div class="grid grid-cols-3 gap-x-4 gap-y-8">
      <For each={Array(6)}>
        {() => <VideoCard />}
      </For>
    </div>
  );
}
