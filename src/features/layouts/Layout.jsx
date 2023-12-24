import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Header } from "../../components/header/Header";

/**
 * A function that represents the layout of the application.
 *
 * @return {React.Element} The rendered layout component.
 */
export function Layout() {
    return <>
        <div className="d-flex flex-row">
            <Sidebar />
            <div className="w-100">
                <Header />
                <Outlet />
            </div>
        </div>
    </>
}