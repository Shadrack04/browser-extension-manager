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

  return (
    <div className=" grid grid-cols-3 gap-2">
      {data?.map((item) => (
        <ExtensionItem key={item.name} />
      ))}
      <ExtensionItem />
      <ExtensionItem />
      <ExtensionItem />
    </div>
  );
}
