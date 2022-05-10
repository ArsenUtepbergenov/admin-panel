import { useContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import List from './pages/List/List'
import Single from './pages/Single/Single'
import New from './pages/New/New'
import { DarkModeContext } from 'contexts/darkModeContext'
import { StoreContext } from 'index'
import { userInputs } from 'data/formSource'
import './styles/dark.scss'

function App() {
  const { darkMode } = useContext(DarkModeContext)
  const { store } = useContext(StoreContext)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (store.isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <h5>{store.isAuth ? `User is authorized ${store.user.email}` : 'Authorize'}</h5>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default observer(App)
