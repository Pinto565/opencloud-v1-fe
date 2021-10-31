import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import DeviceStatus from "./pages/DeviceStatus";
import DeployApplication from "./pages/DeployApplication";
import FlaskDeployment from "./pages/FlaskDeployment";
import AddDevice from "./pages/AddDevice";
import SshKey from "./pages/SshKey";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/devices" component={DeviceStatus} />
          <Route exact path="/deploy" component={DeployApplication} />
          <Route exact path="/deploy/flask" component={FlaskDeployment} />
          <Route exact path="/devices/add" component={AddDevice} />
          <Route exact path="/ssh" component={SshKey} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
