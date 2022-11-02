import { Redirect, Route, Switch } from "react-router-dom";

// components

import FooterAdmin from "components/Footers/FooterAdmin.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import New from "views/admin/New.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/empresa/dashboard" exact component={Dashboard} />
            <Route path="/empresa/configuracoes" exact component={Settings} />
            <Route path="/empresa/vagas" exact component={Tables} />
            <Route path="/empresa/nova" exact component={New} />
            <Redirect from="/empresa" to="/empresa/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
