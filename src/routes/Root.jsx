import { Outlet } from "react-router"
import MainNav from "./mainNav/MainNav"
import "./Root.css"
const Root = () => {
    return(
        <div className="root">
            <MainNav />
            <Outlet />
        </div>
    )
}

export default Root