import React from "react";
import { Button } from "./ui/button";
import { useAppContext } from "../../context/app-context";

const buttonData = [
  {
    name: "All",
    action: "all",
  },
  {
    name: "Active",
    action: "active",
  },
  {
    name: "Inactive",
    action: "inactive",
  },
];

export default function HeaderFilter() {
  const { handleFilter } = useAppContext();
  return (
    <div className=" py-3 w-full flex flex-col md:flex-row gap-3 items-center justify-between">
      <p className=" text-2xl text-primary-text font-bold">Extensions List</p>
      <div className=" flex items-center gap-3">
        {/* <Button className=" bg-card text-black rounded-full py-0">All</Button>
        <Button className=" rounded-full">Active</Button>
        <Button className=" rounded-full">Inactive</Button> */}
        {buttonData.map((btn) => (
          <Button asChild className=" bg-card text-black rounded-full py-0">
            <button onClick={() => handleFilter(btn.action)}>{btn.name}</button>
          </Button>
        ))}
      </div>
    </div>
  );
}
