import React from "react";
import ExtensionItem from "./extension-item";

export default function Extensions() {
  return (
    <div className=" grid grid-cols-3 gap-2">
      <ExtensionItem />
      <ExtensionItem />
      <ExtensionItem />
    </div>
  );
}
