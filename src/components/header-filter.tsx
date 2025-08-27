import React from "react";
import { Button } from "./ui/button";

export default function HeaderFilter() {
  return (
    <div className=" py-3 w-full flex items-center justify-between">
      <p className=" text-2xl text-primary-text font-bold">Extension List</p>
      <div className=" flex items-center gap-2">
        <Button className=" bg-card text-black rounded-full py-0">All</Button>
        <Button className=" rounded-full">Active</Button>
        <Button className=" rounded-full">Inactive</Button>
      </div>
    </div>
  );
}
