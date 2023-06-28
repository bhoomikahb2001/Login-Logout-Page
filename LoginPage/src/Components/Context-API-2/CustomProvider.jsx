import { createContext, useState } from "react";

export const AuthContext  = createContext()

function CustomProviderComp({children}) {
    const [isloggedin,setIsLoggedIn] = useState(false)
    const login = ()=>{
        setIsLoggedIn(true)
    }
    const logout = ()=>{

        setIsLoggedIn(false)
    }
    return (
        <div>
            <AuthContext.Provider value={{isloggedin,login,logout}}>
                {children}
            </AuthContext.Provider>
        </div>
    );
}

export default CustomProviderComp;