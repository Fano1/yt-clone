import Cards from './components/Cards'
import Navbar from './components/Navbar'
import SideBar from './components/Sidebar'

function App() {

  return (
    <>

      <div class="">
      <Navbar />
      </div>

      <div class="flex flex-1">
      <SideBar />

      <main class="flex-1 p-6 overflow-y-auto">
        <Cards />

      </main>

      </div>


    </>
  )
}

export default App
