import React from "react";

export default function AppNav() {
  return (
    <nav className=" bg-card p-2 rounded-xl w-full flex items-center justify-between mb-3">
      <img src="/assets/svg/logo.svg" alt="" />
      <div className=" bg-card-foreground p-2 rounded-lg">
        <img src="/assets/images/icon-moon.svg" alt="" />
      </div>
    </nav>
  );
}
