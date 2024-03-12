import Canvas from "./canvas"
import Coustomizer from "./pages/Coustomizer"
import Home from "./pages/Home"
function App() {
  return (
   <main className="app transition-all ease-in">
    <Home/>
    <Canvas/>
    <Coustomizer/>
   </main>
  )
}

export default App
