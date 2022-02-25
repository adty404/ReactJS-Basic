import React, { useContext } from 'react'
import { UserContext, UserProvider } from '../context/User'
import AuthenticatedUser from '../components/AuthenticatedUser'

const User = () => {
    const {user, loading} = useContext(UserContext)
    return (
        <div>
            {
                loading ? <div>Loading . . .</div>
                :
                <div>
                    My name is : {user.name}
                </div>
            }
        </div>
    )
}

export default function Home(props) {
  return (
    <div className="container">
        <UserProvider>
            <User /> {/*Satu component*/}
            <div className="d-flex">
                <div className="mr-1">
                    My name is :
                </div>
                <AuthenticatedUser /> {/*Beda component*/}
            </div>
        </UserProvider>
    </div>
  )
}
