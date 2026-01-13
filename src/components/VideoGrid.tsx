import { For } from "solid-js";

type Video = {
  id: number;
  title: string;
  channel: string;
  views: string;
  age: string;
};

const videos: Video[] = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  title: `Imagine deez nuts #${i + 1}`,
  channel: `Fanoalone ${i + 1}`,
  views: `${Math.floor(Math.random() * 900 + 100)}K views`,
  age: `${Math.floor(Math.random() * 11 + 1)} days ago`,
}));

function VideoCard(props: { video: Video }) {
  return (
    <div class="w-full min-w-0 cursor-pointer space-y-3">
      <div class="relative w-full overflow-hidden rounded-xl bg-[#181818]">
        <div class="aspect-video w-full">
          <img
            src={`https://picsum.photos/seed/${props.video.id}/640/360`}
            alt={props.video.title}
            class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <span class="absolute bottom-2 right-2 text-xs bg-black/80 px-1.5 py-0.5 rounded">
          12:34
        </span>
      </div>

      <div class="flex gap-3 min-w-0">
        <img
          src={`https://i.pravatar.cc/40?img=${props.video.id + 10}`}
          class="w-9 h-9 rounded-full flex-shrink-0"
        />

        <div class="flex-1 min-w-0">
          <h3 class="text-sm font-medium line-clamp-2">
            {props.video.title}
          </h3>

          <p class="text-xs text-[#aaaaaa] mt-1 truncate">
            {props.video.channel}
          </p>

          <p class="text-xs text-[#aaaaaa] truncate">
            {props.video.views} • {props.video.age}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function VideoGrid() {
  return (
    <div class="w-full px-6 lg:px-8">
      <div
        class="
          grid
          w-full
          gap-x-6 gap-y-10
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        <For each={videos}>
          {(video) => <VideoCard video={video} />}
        </For>
      </div>
    </div>
  );
}
