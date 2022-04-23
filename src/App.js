import { useContext } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import List from "./pages/List/List"
import Single from "./pages/Single/Single"
import New from "./pages/New/New"
import { DarkModeContext } from "contexts/darkModeContext"
import { productInputs, userInputs } from "data/formSource"
import "./styles/dark.scss"

function App() {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
