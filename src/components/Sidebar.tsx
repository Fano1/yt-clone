import { For, Show, createSignal } from "solid-js";

type SidebarProps = {
  open: boolean;
};

/* ---------- ICON CDN ---------- */
const icons = {
  home: "https://unpkg.com/heroicons@2.1.5/24/outline/home.svg",
  shorts: "https://unpkg.com/heroicons@2.1.5/24/outline/play-circle.svg",
  subs: "https://unpkg.com/heroicons@2.1.5/24/outline/rectangle-stack.svg",
  user: "https://unpkg.com/heroicons@2.1.5/24/outline/user-circle.svg",
  history: "https://unpkg.com/heroicons@2.1.5/24/outline/clock.svg",

  music: "https://unpkg.com/heroicons@2.1.5/24/outline/musical-note.svg",
  gaming: "https://unpkg.com/heroicons@2.1.5/24/outline/cpu-chip.svg",
  sports: "https://unpkg.com/heroicons@2.1.5/24/outline/trophy.svg",

  premium: "https://unpkg.com/heroicons@2.1.5/24/outline/star.svg",
  kids: "https://unpkg.com/heroicons@2.1.5/24/outline/face-smile.svg",
};

/* ---------- DATA ---------- */

const mainItems = [
  { id: "home", label: "Home", icon: icons.home },
  { id: "shorts", label: "Shorts", icon: icons.shorts },
  { id: "subs", label: "Subscriptions", icon: icons.subs },
  { id: "you", label: "You", icon: icons.user },
  { id: "history", label: "History", icon: icons.history },
];

const exploreItems = [
  { id: "music", label: "Music", icon: icons.music },
  { id: "gaming", label: "Gaming", icon: icons.gaming },
  { id: "sports", label: "Sports", icon: icons.sports },
];

const moreItems = [
  { id: "premium", label: "YouTube Premium", icon: icons.premium },
  { id: "kids", label: "YouTube Kids", icon: icons.kids },
];

/* ---------- ICON ---------- */

function Icon(props: { src: string }) {
  return (
    <div
      class="w-5 h-5 bg-white shrink-0"
      style={{
        "mask-image": `url(${props.src})`,
        "-webkit-mask-image": `url(${props.src})`,
        "mask-repeat": "no-repeat",
        "-webkit-mask-repeat": "no-repeat",
        "mask-position": "center",
        "-webkit-mask-position": "center",
        "mask-size": "contain",
        "-webkit-mask-size": "contain",
      }}
    />
  );
}

/* ---------- SIDEBAR ---------- */

export default function Sidebar(props: SidebarProps) {
  const [selected, setSelected] = createSignal("home");

  return (
    <aside
      class={`
        fixed top-14 left-0
        h-[calc(100vh-3.5rem)]
        bg-[#0f0f0f]
        border-r border-[#303030]
        transition-all duration-200
        ${props.open ? "w-60" : "w-16"}
      `}
    >
      <div class="px-2 py-2 space-y-1">
        <For each={mainItems}>
          {(item) => (
            <SidebarItem
              item={item}
              open={props.open}
              active={selected() === item.id}
              onClick={() => setSelected(item.id)}
            />
          )}
        </For>
      </div>

      <Show when={props.open}>
        <Divider />

        <div class="px-5 py-3 space-y-3 text-[#aaa] text-sm font-semibold">
          <p>Sign in to like videos, comment, and subscribe.</p>

          <button class="flex items-center gap-2 px-4 py-1.5 border border-[#3ea6ff] rounded-full text-[#3ea6ff] hover:bg-[#263850]">
            <Icon src={icons.user} />
            Sign in
          </button>
        </div>

        <Divider />
        <Section
          title="Explore"
          items={exploreItems}
          selected={selected}
          setSelected={setSelected}
        />
        <Divider />
        <Section
          title="More from YouTube"
          items={moreItems}
          selected={selected}
          setSelected={setSelected}
        />
      </Show>
    </aside>
  );
}

/* ---------- COMPONENTS ---------- */

function SidebarItem(props: {
  item: { id: string; label: string; icon: string };
  open: boolean;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={props.onClick}
      class={`
        flex items-center
        h-10 px-3 rounded-xl cursor-pointer
        transition-colors
        ${props.active ? "bg-[#272727]" : "hover:bg-[#272727]"}
        ${props.open ? "gap-5" : "justify-center"}
      `}
    >
      <Icon src={props.item.icon} />

      <Show when={props.open}>
        <span class="text-sm font-semibold text-white">
          {props.item.label}
        </span>
      </Show>
    </div>
  );
}

function Section(props: {
  title: string;
  items: { id: string; label: string; icon: string }[];
  selected: () => string;
  setSelected: (id: string) => void;
}) {
  return (
    <div class="px-3 py-2">
      <p class="px-3 pb-2 text-xs font-semibold text-[#aaa] uppercase">
        {props.title}
      </p>

      <For each={props.items}>
        {(item) => {
          const active = () => props.selected() === item.id;

          return (
            <div
              onClick={() => props.setSelected(item.id)}
              class={`
                flex items-center gap-5 h-10 px-3 rounded-xl cursor-pointer
                transition-colors
                ${active() ? "bg-[#272727]" : "hover:bg-[#272727]"}
              `}
            >
              <Icon src={item.icon} />
              <span class="text-sm font-semibold text-white">
                {item.label}
              </span>
            </div>
          );
        }}
      </For>
    </div>
  );
}

function Divider() {
  return <div class="my-2 border-t border-[#303030]" />;
}
