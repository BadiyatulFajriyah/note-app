import { createContext, useContext, useEffect, useRef, useState } from 'react'
import * as authHelper from './AuthHelpers'
import { getUserByToken } from './_requests'

//Nilai default dari state dan function milik context Auth
const initAuthContextPropsState = {
  auth: authHelper.getAuth(),
  saveAuth: () => {},
  currentUser: undefined,
  setCurrentUser: () => {},
  logout: () => {},
  operator: "",
  operatorLogin: () => {},
  operatorMesssage: ""
}

// Membuat context dengan nilai default di atas
const AuthContext = createContext(initAuthContextPropsState)

//Membuat custom hook untuk memanggil nilai dari context auth
//custom hook ini akan dipanggil di child yang membutuhkan
const useAuth = () => {
  return useContext(AuthContext)
}

//membuat provider, diisi dengan state dan function yang akan dipanggil
//atau digunakan di child
const AuthProvider = ({children}) =>  {
  //ini state milik authprovider
  const [auth, setAuth] = useState(authHelper.getAuth())
  const [currentUser, setCurrentUser] = useState(undefined)
  const [opMessage, setOpMessage] = useState("")
  const [operator, setOperator] = useState("")

  //ini fucction-function milik provider
  const saveAuth = (auth) => {
    setAuth(auth)
    console.log("saving auth")
    if(auth) {
      console.log("auth true")
      authHelper.setAuth(auth)
    } else {
      console.log("auth false")
      authHelper.removeAuth()
    }
  }

  const operatorLogin = (password, name) => {
    if (password == "123456") {
      setOperator(name)
    } else 
    setOpMessage("Login Operator Gagal")
  }

  const logout = () => {
    saveAuth(undefined)
    setCurrentUser(undefined)
  }

  // return provider beserta state dan function yang akan diakses oleh child
  return (
    <AuthContext.Provider value={{auth, saveAuth, currentUser, setCurrentUser, logout, operator, operatorLogin, opMessage}}>
      {children}
    </AuthContext.Provider>
  )
}

//export provider dan custom hook agar dapat dipanggil dari file lain
export {AuthProvider, useAuth}