// import { useState } from "react"
import { NavLink, Link, Outlet } from "react-router-dom"

const RootLayout = () => {
    
    return (
        <div className="flex">
            <nav className="flex flex-col justify-between w-1/5 h-[100dvh] sticky top-0 bg-neutral">
                <ul className="flex flex-col items-center gap-y-4 px-4">
                    <Link to='.'>
                        <img src="/elva_logo.png" alt="Home Logo"  className="h-32"/>
                    </Link>
                    <NavLink to='.' end className={({isActive}) => isActive? 'active-link' : 'link'}>
                        <img src="/home-outline.svg" alt="" className="h-5 inline"/>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to='catalog' className={({isActive}) => isActive? 'active-link' : 'link'}>
                        <img src="/library-outline.svg" alt="" className="h-5 inline"/>
                        <li>Catalog</li>
                    </NavLink>
                    <NavLink to='account' className={({isActive}) => isActive? 'active-link' : 'link'}>
                        <img src="/person-outline.svg" alt="" className="h-5 inline"/>
                        <li>Account</li>
                    </NavLink>
                    <NavLink to='contact' className={({isActive}) => isActive? 'active-link' : 'link'}>
                        <img src="/people-outline.svg" alt="" className="h-5 inline"/>
                        <li>Contact</li>
                    </NavLink>
                </ul>
                <button className="mb-6 mx-3 py-2 font-bold text-[#eddedf] border border-primaryColor"><img src="/log-out-outline.svg" alt="" className="h-5 inline"/> Logout</button>
            </nav>
            <div className="w-4/5 bg-[#cfcfcf] px-8 pt-6">
                {/* <div className="md:hidden absolute right-8 top-8 flex flex-col gap-y-1 cursor-pointer border border-primaryColor items-center justify-center p-2 rounded">
                    <div className="h-1 w-8 bg-primaryColor rounded"></div>
                    <div className="h-1 w-8 bg-primaryColor rounded"></div>
                    <div className="h-1 w-8 bg-primaryColor rounded"></div>
                </div> */}
                <Outlet />
            </div>
            
        </div>
    )
}

export default RootLayout