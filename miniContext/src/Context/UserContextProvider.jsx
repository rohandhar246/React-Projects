import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvier = ({Contxt}) =>{
    const [user, setUser] = useState(null)
   return(
    <UserContext.Provider value={{user, setUser}}>
    {Contxt}
    </UserContext.Provider>
   )
}

export default UserContextProvier