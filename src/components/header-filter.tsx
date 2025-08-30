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
  const { handleFilter, filterParam } = useAppContext();

  console.log(filterParam);

  return (
    <div className=" py-3 w-full flex flex-col md:flex-row gap-3 items-center justify-between">
      <p className=" text-2xl text-primary-text font-bold">Extensions List</p>
      <div className=" flex items-center gap-3">
        {buttonData.map((btn) => (
          <Button
            key={btn.action}
            asChild
            className={` ${
              btn.action == filterParam
                ? " bg-primary text-primary-text "
                : " bg-card text-primary-text dark:border-input dark:hover:bg-input/50"
            }  rounded-full py-0 hover:text-white cursor-pointer`}
          >
            <button onClick={() => handleFilter(btn.action)}>{btn.name}</button>
          </Button>
        ))}
      </div>
    </div>
  );
}
