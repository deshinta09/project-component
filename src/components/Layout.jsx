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
        <div className="bg-[#56A0AF] text-white flex justify-between h-20 items-center px-3">
          <div className="flex items-center">
            <div
              className="hover:bg-[#206F7E] rounded-full p-2 cursor-pointer"
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              <Bars3Icon className="w-6" />
            </div>
            <h1 className="text-xl ml-3 font-bold">Lorem</h1>
          </div>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70 text-slate-500"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
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
