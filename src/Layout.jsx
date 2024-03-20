import { Link, Outlet } from "react-router-dom"
import { useAuth } from "./context/Auth"

export default function Layout() {
    const {isLoggedin, doLogout} = useAuth()
    return (
        
        <>
            <div className="bg-blue-200 h-[55px] justify-around py-3 flex gap-2 ">
                <h1 className="text-white text-2xl"> NOTE</h1>
                { isLoggedin ? (
                     <span className="font-bold">Sudah Login</span>
                ) : ( 
                    <span className="font-bold">Belum Login</span>
                    ) }
               
                <nav className="flex font-bold ">
                    {isLoggedin ? <>
                        <Link to={"/note"}><span className="mx-4 hover:text-white">Notes</span></Link>
                        <Link onClick={() => doLogout()}><span className="mx-4 hover:text-white">Logout</span></Link>
                    </> : <>
                     <Link to={"/Registrasi"}><span className="mx-4 hover:text-white">Registrasi</span></Link>
                     <Link to={"/Login"}><span className="mx-4 hover:text-white">Login</span></Link>
                    </> }

                </nav>
            </div>
            <Outlet />
        </>
    )
}




// import { Link, Outlet } from "react-router-dom/dist";

// export default function Layout() {
//     return (
//         <>
//             <div className="bg-blue-200 h-[55px] justify-around py-3 flex gap-2  ">
//                 <h1>Vote</h1>
//                 <nav className="flex font-bold">
//                     <Link className="mx-4 hover:text-white" to={"/Registrasi"}><p>Registrasi</p></Link>
//                     <Link className="mx-4 hover:text-white" to={"/Login"}><p>Login</p></Link>
//                     <Link className="mx-4 hover:text-white" to={"/note"}><p>Note</p></Link>

//                 </nav>
//             </div>
//             <Outlet />
//         </>
//     )
// }