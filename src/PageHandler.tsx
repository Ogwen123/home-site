import { Outlet } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'


const PageHandler = () => {
    return (
        <div>
            <div className="mh-all">
                <NavigationBar />
                <Outlet />
            </div>
        </div>

    )
}

export default PageHandler