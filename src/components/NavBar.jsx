import { House, ChartNoAxesColumn, CalendarDays, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    path: "/",
    Icon: House,
  },
  {
    path: "/reportes",
    Icon: ChartNoAxesColumn,
  },
  {
    path: "/barberos",
    Icon: CalendarDays,
  },
  {
    path: "/configuracion",
    Icon: Settings,
  },
];

const NavBar = () => {
  const currentPath = useLocation().pathname;

  const baseItemClasses = "p-4 rounded-lg transition-colors duration-200";
  const baseIconClasses = "text-muted";
  const activeStyle = " text-white-md";
  const inactiveStyle = "hover:bg-gray-button text-muted";

  return (
    <nav className="p-1 px-6 py-2">
      <ul className="flex justify-between">
        {menuItems.map((item) => {
          const isActive = currentPath === item.path;
          const listItemClasses = `${baseItemClasses} ${
            isActive ? activeStyle : inactiveStyle
          }`;
          const IconComponent = item.Icon;

          return (
            <li key={item.path} className={listItemClasses}>
              <Link to={item.path}>
                <IconComponent
                  size={30}
                  className={isActive ? "text-white-md" : baseIconClasses}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
