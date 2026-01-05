export default function Sidebar(props: { open: boolean }) {
  return (
    <aside
      class={`
        fixed top-14 left-0 z-40
        h-[calc(100vh-56px)]
        bg-[#0f0f0f]
        border-r border-[#303030]
        transition-all duration-200
        ${props.open ? "w-60" : "w-16"}
      `}
    >
      <div class="p-2 space-y-1">
        {["Home", "Shorts", "Subscriptions", "Library"].map((item) => (
          <div
            class="
              flex items-center gap-4
              p-3 rounded-lg
              hover:bg-[#272727]
              cursor-pointer
              text-sm
            "
          >
            <div class="w-5 h-5 bg-[#555] rounded"></div>
            {props.open && <span>{item}</span>}
          </div>
        ))}
      </div>
    </aside>
  );
}
