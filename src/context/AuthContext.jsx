
import { createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../firebase-config";
export const AuthContext = createContext()


export const AuthProvider = ({children})=> {

    const provider = new GoogleAuthProvider()
    const fbProvider = new FacebookAuthProvider()
    const ghProvider = new GithubAuthProvider()
  
    const [regData , setRegData] = useState({})
    const [loginData , setLoginData] = useState({})
    const [currentUser, setCurrentUser] = useState()
    const [updateP , setUpdateP] = useState({})

    const navigate = useNavigate()

    const handleSigninWithGoogle = async ()=> {
      try{
        const googlAuth = signInWithPopup(Auth, provider)
        navigate('/profile')
        console.log(googlAuth)
      }catch(error) {
        console.log(error.message)
      }
      
    }
    const handleSigninWithGithub = async ()=> {
      try{
        const githubAuth = signInWithPopup(Auth, ghProvider)
        navigate('/profile')
        console.log(githubAuth)
      }catch(error) {
        console.log(error.message)
      }
      
    }
    const handleSigninWithFacebook = async ()=> {
      try{
        const facebookAuth = signInWithPopup(Auth, fbProvider)
        navigate('/profile')
        console.log(facebookAuth)
      }catch(error) {
        console.log(error.message)
      }
      
    }

    const handleRegistraion = async () => {
      try{
        const user = await createUserWithEmailAndPassword(Auth ,regData.email, regData.password )
        navigate('/profile')
        console.log(user)
      }catch(error) {
        console.log(error.message)
      }
    }
    const handleLogin = async () => {
        try{
            const user = await signInWithEmailAndPassword(Auth ,loginData.email, loginData.password )
            navigate('/profile')
            console.log(user)
          }catch(error) {
            console.log(error.message)
          }
    }

    const handleSignOut = async () => {
       await signOut(Auth)
       navigate('login')
  
    }

    const handleUpdateProfile = async ()=> {
      try {
        const data = await updateProfile(currentUser, updateP)
        navigate('/profile')
      }catch(error) {
        console.log(error.message)
      } 
    
    }

    const handleEmailVerify = async ()=> {
      try {
        const res = await sendEmailVerification(currentUser)
        console.log(res)
      }catch(error) {
        console.log(error.message)
      }
    }



    const value = {
        setRegData,
        handleRegistraion,
        regData,
        loginData,
        setLoginData,
        handleLogin,
        currentUser,
        handleSignOut,
        setCurrentUser,
        setUpdateP,
        handleUpdateProfile,
        updateP,
        handleEmailVerify,
        handleSigninWithGoogle,
        handleSigninWithFacebook,
        handleSigninWithGithub
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}