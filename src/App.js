import { onAuthStateChanged } from "firebase/auth"
import { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./componennts/Navbar"
import { AuthContext } from "./context/AuthContext"
import { Auth } from "./firebase-config"
import Home from "./pages/Home"
import Loading from "./pages/Loading"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Profile from "./pages/Profile"
import Registraion from "./pages/Registraion"
import UpdateProfile from "./pages/UpdateProfile"


function App() {
  

  const {setCurrentUser} = useContext(AuthContext)
  onAuthStateChanged(Auth, (user) => {
      
        setCurrentUser(user)
      
    })

  return (
    
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="login" element={<Login />}/>
      <Route path="registraion" element={<Registraion />}/>
      <Route path="/profile" element={<Profile />} />
      <Route path="/update-profile" element={<UpdateProfile />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
