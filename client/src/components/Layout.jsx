import React from "react";
import "../layout.css";
import { Link, useNavigate } from "react-router-dom";

function Layout({ children }) {
  const [collapsed, setCollapsed] = React.useState(false);
  const navigate = useNavigate();
  const userMenu = [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-line",
    },
    {
      name: "Appointments",
      path: "/appointments",
      icon: "ri-file-list-line",
    },
    {
      name: "Apply Doctor",
      path: "/apply-doctor",
      icon: "ri-nurse-line",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "ri-id-card-line",
    },
    {
      name: "Logout",
      path: "/logout",
      icon: "ri-logout-box-line",
    },
  ];

  const menuToBeRendered = userMenu;

  return (
    <div className="main">
      <div className="d-flex layout">
        <div className={`${collapsed ? "collapsed-sidebar" : "sidebar"}`}>
          <div className="sidebar-header">
            {!collapsed && <h1>health-Me</h1>}
          </div>

          <div className="menu">
            {menuToBeRendered.map((menu) => {
              return (
                <div className="d-flex menu-item">
                  <i className={menu.icon}></i>
                  {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                </div>
              );
            })}
          </div>
        </div>

        <div className="content">
          <div className="header">
            {collapsed ? (
              <i
                className="ri-menu-2-line header-action-icon "
                onClick={() => setCollapsed(false)}
              ></i>
            ) : (
              <i
                className="ri-close-line header-action-icon "
                onClick={() => setCollapsed(true)}
              ></i>
            )}

            <div className="d-flex">
              <i
                className="ri-notification-line header-action-icon"
                onClick={() => navigate("/notifications")}
              ></i>
            </div>
          </div>
          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
