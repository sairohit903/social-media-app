import { Link } from 'react-router-dom'
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth"

export const Navbar = () => {

    const [user] = useAuthState(auth);

    const userSignOut = async () => {
        await signOut(auth);
    }

    return (
        <div className='navBar'>
            <div className="nav-items">
                <Link to="/"> Home </Link>
                {!user ? <Link to="/login"> Login </Link> : <Link to="/create-post"> Create Post </Link>}
            </div>
            <div className='userDetails'>
                {user && (
                    <>
                        <p>{user?.displayName}</p>
                        <img src={user?.photoURL || ""} width="30px" height="30px" />
                        <button onClick={userSignOut}> Log Out </button>
                    </>
                )}
            </div>
        </div>
    );
}