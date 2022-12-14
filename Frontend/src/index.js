import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import RegisterLayout from "layouts/Register";
import User from "layouts/User";
import Index from "views/Index.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/empresa" component={Admin} />
      <Route path="/auth" component={Auth} />
      <Route path="/usuario" component={User} />
      <Route path="/registrar" component={RegisterLayout} />
      <Route path="/" exact component={Index} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
