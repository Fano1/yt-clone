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
  title: `This video will change how you code #${i + 1}`,
  channel: `Code Daddy ${i + 1}`,
  views: `${Math.floor(Math.random() * 900 + 100)}K views`,
  age: `${Math.floor(Math.random() * 11 + 1)} days ago`,
}));

function VideoCard(props: { video: Video }) {
  return (
    <div class="space-y-3 cursor-pointer">
      {/* Thumbnail */}
      <div class="relative overflow-hidden rounded-xl bg-[#181818]">
        <img
          src={`https://picsum.photos/seed/${props.video.id}/640/360`}
          alt={props.video.title}
          class="w-full aspect-video object-cover hover:scale-105 transition-transform duration-300"
        />
        <span class="absolute bottom-2 right-2 text-xs bg-black/80 px-1.5 py-0.5 rounded">
          12:34
        </span>
      </div>

      {/* Info */}
      <div class="flex gap-3">
        {/* Avatar */}
        <img
          src={`https://i.pravatar.cc/40?img=${props.video.id + 10}`}
          class="w-9 h-9 rounded-full"
        />

        <div class="flex-1">
          <h3 class="text-sm font-medium line-clamp-2">
            {props.video.title}
          </h3>

          <p class="text-xs text-[#aaaaaa] mt-1">
            {props.video.channel}
          </p>

          <p class="text-xs text-[#aaaaaa]">
            {props.video.views} • {props.video.age}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function VideoGrid() {
  return (
    <div
      class="
        grid
        gap-x-6 gap-y-10
        px-6 py-6
        grid-cols-[repeat(auto-fill,minmax(300px,1fr))]
      "
    >
      <For each={videos}>
        {(video) => <VideoCard video={video} />}
      </For>
    </div>
  );
}
