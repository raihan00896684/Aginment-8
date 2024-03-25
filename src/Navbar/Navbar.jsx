
import { NavLink } from "react-router-dom";
const Nav = ()=>{
    return (
        <div className="navbar bg-base-100 mx-auto pb-10">
            <div className="navbar-start">
                <div className="dropdown">

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                      


                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                
                <NavLink  className={'btn mr-3'}>Home</NavLink>

<NavLink  className={'btn mr-3'}>Listed Books</NavLink>

<NavLink  className={'btn mr-3'}>Pages to Read</NavLink>

                </ul>
            </div>
            <div className="navbar-end ">
                <a className="btn mr-3 bg-green-700">Sign In</a>
                <a className="btn bg-green-700">Sign Up</a>
            </div>
        </div>

    )
}

export default Nav;
