import { useAppContext } from "../../context/app-context";
import { MoonIcon, SunIcon } from "lucide-react";
import React from "react";

export default function AppNav() {
  const { setIsDarkTheme, isDarkTheme } = useAppContext();
  return (
    <nav className=" bg-card p-2 rounded-xl w-full flex items-center justify-between mb-3">
      <img src="/assets/svg/logo.svg" alt="" />
      <div
        onClick={() => setIsDarkTheme((prev) => !prev)}
        className=" cursor-pointer bg-card-foreground p-2 rounded-lg"
      >
        {isDarkTheme ? (
          <SunIcon className=" text-primary-text" />
        ) : (
          <MoonIcon className=" text-primary-text" />
        )}
      </div>
    </nav>
  );
}
