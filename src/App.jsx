import HomePage from "./page/HomePage"
import Sidebar from "./components/Sidebar"
import { Route, Routes } from "react-router-dom"
import Favourite from "./page/Favourite"


const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/favourite" element={<Favourite/>} />
      </Routes> 
    </div>
  )
}

export default App