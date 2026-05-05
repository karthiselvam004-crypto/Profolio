import { NavLink } from "react-router-dom";

const navItems = [
  { path: "/home", label: "Home", icon: "⌂" },
  { path: "/about", label: "About", icon: "👤" },
  { path: "/skills", label: "Skills", icon: "⚡" },
  { path: "/projects", label: "Projects", icon: "🗂" },
  { path: "/education", label: "Education", icon: "🎓" },
  { path: "/contact", label: "Contact", icon: "✉" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">KS</div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-link${isActive ? " active" : ""}`
            }
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-footer">
        <p>Karthikeyan S</p>
        <p className="sidebar-role">Full Stack Developer</p>
      </div>
    </aside>
  );
}