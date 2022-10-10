import {Navigate , Outlet} from 'react-router-dom'
import useAuthStatus from '../hooks/useAuthStatus'

const PrivateRoute = () => {

    const {loggedIn , checkStatus} = useAuthStatus()
    
    if (checkStatus) {
        return <h3>Loading...</h3>
    }
    console.log(loggedIn);
    return loggedIn ? <Outlet/> : <Navigate to="/sign-in"/>
}

export default PrivateRoute