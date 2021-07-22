import { Route, Switch } from 'react-router'
import Home from '../Components/Screens/Home'
import Login from '../Components/Screens/Login'
import Signup from '../Components/Screens/Signup'
import Profile from '../Components/Screens/Profile'
import Createfeed from '../Components/Screens/Createfeed'
import Viewprofile from '../Components/Screens/Viewprofile'
function Router() {
    return (
        <Switch>
            <Route name="Home" path="/" exact component={Home} />
            <Route name="Login" path="/Login" component={Login}/>
            <Route name="Signup"  path="/Signup" component={Signup}/>
            <Route name="Profile"  path="/Profile" component={Profile}/>
            <Route name="Create" path="/create" component={Createfeed} />
            <Route name="Viewprofile" path="/view/:username" component={Viewprofile}/>
        </Switch>
    )
}

export default Router
