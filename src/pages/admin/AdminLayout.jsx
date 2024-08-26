import { NavLink, Outlet, Link } from "react-router-dom"

const AdminLayout = () => {
    return (
        <div className="flex">
            <nav className="sticky top-0 w-1/5 h-[100dvh] bg-primaryColor flex flex-col items-center px-4">
                <Link to='.'>
                    <img src="/elva_logo.png" alt="home" className="h-32 mt-8 mb-6"/>
                </Link>
                
                <ul className="flex flex-col gap-y-2 w-full">
                    <NavLink to='.' end className={({isActive}) => isActive? 'active-link' : 'link'}>
                        <img src="/home-outline.svg" alt="" className="h-5 inline"/>
                        <li>Dashboard</li>
                    </NavLink>
                    <NavLink to='books' className={({isActive}) => isActive? 'active-link' : 'link'}>
                        <img src="/book-outline.svg" alt="" className="h-5 inline"/>
                        <li>Books</li>
                    </NavLink>
                    <NavLink to='account' className={({isActive}) => isActive? 'active-link' : 'link'}>
                        <img src="/person-outline.svg" alt="" className="h-5 inline"/>
                        <li>Account</li>
                    </NavLink>
                </ul>              
            </nav>
            <div className="w-4/5 bg-neutral p-8 text-tertiaryColor">
                <Outlet />
            </div>
        </div>
    )
}

export default AdminLayout