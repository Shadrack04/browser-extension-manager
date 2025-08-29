import ExtensionItem from "./extension-item";

import { useAppContext } from "../../context/app-context";

export default function Extensions() {
  const { data, handleToggle, handleRemove, filterParam } = useAppContext();

  let filteredData = data;

  if (filterParam === "active")
    filteredData = data.filter((item) => item.isActive);
  if (filterParam === "inactive")
    filteredData = data.filter((item) => !item.isActive);

  return (
    <div className=" grid grid-cols-1 pb-4 md:grid-cols-3 gap-2">
      {filteredData?.map((item) => (
        <ExtensionItem
          name={item.name}
          logo={item.logo}
          description={item.description}
          isActive={item.isActive}
          key={item.name}
        />
      ))}
    </div>
  );
}
