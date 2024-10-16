import Link from "next/link";
import navLinks from "@/data/navLinks";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul role="list">
        {navLinks.map((link) => {
          return (
            <li key={link.href}>
              <Link key={link.href} href={link.href}>
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
