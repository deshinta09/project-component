import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function LayoutMain() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div className={`drawer ${openDrawer && "drawer-open"}`}>
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={openDrawer}
        onClick={() => setOpenDrawer(!openDrawer)}
      />
      <div className="drawer-content">
        {/* Page content here */}
        <div className="bg-[#56A0AF] text-white flex h-20 items-center gap-3 px-3">
          <div
            // className={`${openDrawer && "hidden"}`}
            className="hover:bg-[#206F7E] rounded-full p-2"
            onClick={() => setOpenDrawer(!openDrawer)}
          >
            <Bars3Icon className="w-6" />
          </div>
          <h1 className="text-xl ml-3 font-bold">Lorem</h1>
        </div>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-slate-200 text-base-content min-h-full w-60 p-4">
          {/* Sidebar content here */}
          <li onClick={() => setOpenDrawer(!openDrawer)}>
            <a>Sidebar Item 1</a>
          </li>
          <li onClick={() => setOpenDrawer(!openDrawer)}>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
