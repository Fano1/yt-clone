export default function Navbar(props: { onMenuClick: () => void }) {
  return (
    <header class="fixed top-0 left-0 w-full z-50 h-14 bg-[#0f0f0f] border-b border-black">
      <div class="relative flex items-center h-full px-4">

        {/* LEFT */}
        <div class="flex items-center gap-3 w-[220px]">
          <button
            onClick={props.onMenuClick}
            class="p-2 rounded-full hover:bg-[#272727]"
          >
            {/* MENU ICON */}
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* YOUTUBE LOGO */}
          <div class="flex items-center gap-2 cursor-pointer select-none">
            {/* RED PLAY */}
            <svg viewBox="0 0 28 20" class="h-5.5">
              <rect x="0" y="2" width="28" height="16" rx="4" fill="#FF0000" />
              <polygon points="11,6 11,14 18,10" fill="#ffffff" />
            </svg>

            {/* TEXT */}
            <span class="text-white font-semibold text-[15px] tracking-tight">
              Youtube
            </span>

            <span class="text-xs text-[#909090] ml-0.5">NP</span>
          </div>
        </div>

        {/* CENTER */}
        <div class="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 w-full max-w-[640px] px-4">
          <div class="flex items-center w-full">
            <input
              placeholder="Search"
              class="
                w-full h-10 px-4
                bg-[#121212]
                border border-[#303030] border-r-0
                rounded-l-full
                focus:outline-none
                text-white
                placeholder:text-[#909090]
              "
            />
            <button
              class="
                h-10 px-5
                bg-[#222222]
                border border-[#303030]
                rounded-r-full
                hover:bg-[#303030]
              "
            >
              <svg
                class="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>

          {/* MIC */}
          <button class="p-2 rounded-full bg-[#181818] hover:bg-[#272727]">
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <rect x="9" y="2" width="6" height="12" rx="3" />
              <path d="M5 11a7 7 0 0 0 14 0" />
              <line x1="12" y1="18" x2="12" y2="22" />
            </svg>
          </button>
        </div>

        {/* RIGHT */}
        <div class="ml-auto flex items-center gap-2 w-[220px] justify-end">
          <button class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1f1f1f] hover:bg-[#303030]">
            <svg
              class="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span class="text-sm font-medium text-white">Create</span>
          </button>

          <button class="p-2 rounded-full hover:bg-[#272727]">
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>

          <div class="w-8 h-8 bg-[#a142f4] rounded-full flex items-center justify-center cursor-pointer">
            <span class="text-sm font-medium text-white">A</span>
          </div>
        </div>

      </div>
    </header>
  );
}
