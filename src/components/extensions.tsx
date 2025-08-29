import React, { useEffect, useState } from "react";
import ExtensionItem from "./extension-item";
import type { DataType } from "types";

const DATA_URL = "../../data.json";

export default function Extensions() {
  const [data, setData] = useState<DataType | []>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetch(DATA_URL);
        const res = await req.json();
        setData(res);
      } catch (error) {
        setError("Something went wrong");
      }
    };
    fetchData();
  }, []);

  const handleToggle = (name: string) => {
    if (!name) return;
    setData((data) =>
      data.map((item) =>
        item.name == name ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  const handleRemove = (name: string) => {
    if (!name) return;
    setData((data) => data.filter((item) => item.name !== name));
  };

  return (
    <div className=" grid grid-cols-1 pb-4 md:grid-cols-3 gap-2">
      {data?.map((item) => (
        <ExtensionItem
          name={item.name}
          logo={item.logo}
          description={item.description}
          isActive={item.isActive}
          key={item.name}
          handleToggle={handleToggle}
          handleRemove={handleRemove}
        />
      ))}
    </div>
  );
}
