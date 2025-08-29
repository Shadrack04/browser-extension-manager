import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ContextValueType, DataType } from "types";

const DATA_URL = "../../data.json";

const AppContext = createContext<React.Context | null>(null);

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [filterParam, setFilterParam] = useState("all");
  const [data, setData] = useState<DataType>([]);
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

  const handleFilter = (action: string) => {
    if (!action) return;
    setFilterParam(action);
  };

  const value: ContextValueType = useMemo(
    () => ({
      filterParam,
      data,
      handleRemove,
      handleToggle,
      handleFilter,
    }),
    [filterParam, data]
  );
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useAppContext = () => {
  const context: ContextValueType = useContext(AppContext);
  if (context == undefined)
    throw new Error("Context used outside its provider");
  return context;
};
