import ytLogo from "../assets/youtube-logo.png";

export default function Navbar(props: { onMenuClick: () => void }) {
  return (
    <header
      class="
        flex items-center gap-4
        h-14 px-4
        bg-[#0f0f0f]
        border-b border-[#303030]
        sticky top-0 z-50
      "
    >
      <div class="flex items-center gap-3">
        <button
          onClick={props.onMenuClick}
          class="p-2 rounded-full hover:bg-[#272727]"
        >
          ☰
        </button>

        <img src={ytLogo} class="h-5" />
        <span class="text-xs text-[#aaaaaa]">NP</span>
      </div>

      <div class="flex flex-1 justify-center px-6">
        <input
          placeholder="Search"
          class="
            w-full max-w-xl h-10 px-4
            bg-[#121212]
            text-white
            border border-[#303030]
            rounded-full
            focus:outline-none
          "
        />
      </div>

      <div class="w-8 h-8 bg-[#3a3a3a] rounded-full"></div>
    </header>
  );
}
