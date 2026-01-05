import { createSignal } from "solid-js";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CategoryBar from "./components/CategoryBar";
import VideoGrid from "./components/VideoGrid";
import ShortsRow from "./components/ShortsRow";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = createSignal(true);

  return (
    <div class="bg-[#0f0f0f] text-white min-h-screen overflow-x-hidden">
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen())} />

      <div class="flex">
        <Sidebar open={sidebarOpen()} />

        <main
          class={`
            flex-1
            min-w-0
            transition-all
            ${sidebarOpen() ? "ml-60" : "ml-16"}
          `}
        >
          <CategoryBar />
          <VideoGrid />
          <ShortsRow />
        </main>
      </div>
    </div>
  );
}
