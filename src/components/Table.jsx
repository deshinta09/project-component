import { EyeIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function TableComponent() {
  const [dataDetail, setDataDetail] = useState({});
  const data = [
    {
      id: 1,
      name: "user 1",
      title: "Lorem, ipsum dolor.",
      categories: ["funny"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nesciunt!",
    },
    {
      id: 2,
      name: "user 2",
      title: "Lorem, ipsum dolor.",
      categories: ["misteri", "drama"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nesciunt!",
    },
    {
      id: 3,
      name: "user 3",
      title: "Lorem, ipsum dolor.",
      categories: ["comedy"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nesciunt!",
    },
    {
      id: 4,
      name: "user 4",
      title: "Lorem, ipsum dolor.",
      categories: ["funny"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nesciunt!",
    },
    {
      id: 5,
      name: "user 5",
      title: "Lorem, ipsum dolor.",
      categories: ["creapy", "misteri"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nesciunt!",
    },
  ];

  function getDetail(id) {
    let detail = data.filter((el) => el.id === id);
    setDataDetail(detail[0]);
  }

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <table className="table">
        <tr className="bg-[#A1A1A1] text-white">
          <th>No</th>
          <th>Image</th>
          <th>Name</th>
          <th>Categories</th>
          <th>Title</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
        {data.map((el, i) => (
          <tr key={el.id} className={`${el.id % 2 === 0 && "bg-base-200"}`}>
            <td>{i + 1}</td>
            <td>
              <img
                src={`/image/${el.id}.png`}
                alt={`${el.id}-image`}
                className="w-36"
              />
            </td>
            <td>{el.name}</td>
            <td>
              {el.categories.map((el, i) => (
                <div key={i} className="badge badge-neutral">
                  {el}
                </div>
              ))}
            </td>
            <td>{el.title}</td>
            <td>{el.description}</td>
            <td className="flex gap-4">
              <label
                htmlFor="my-drawer-4"
                className="drawer-button"
                onClick={() => getDetail(el.id)}
              >
                <EyeIcon className="w-5" />
              </label>
              <TrashIcon className="w-5" />
            </td>
          </tr>
        ))}
      </table>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="bg-base-200 text-base-content min-h-full w-80">
          <h1 className="bg-[#84B2FF]">{dataDetail.name}</h1>
        </div>
      </div>
    </div>
  );
}
