import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ContextValueType, DataType } from "types";

const DATA_URL = "../../data.json";

const AppContext = createContext<ContextValueType | null>(null);

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [filterParam, setFilterParam] = useState("all");
  const [data, setData] = useState<DataType>([]);
  const [error, setError] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

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

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme
      ? savedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;

    setIsDarkTheme(isDark);

    document.documentElement.classList.toggle("dark", isDark);
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;
    document.documentElement.classList.toggle("dark", isDarkTheme);
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [hasMounted, isDarkTheme]);

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
      setIsDarkTheme,
      isDarkTheme,
    }),
    [filterParam, data, isDarkTheme]
  );
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context == undefined)
    throw new Error("Context used outside its provider");
  return context;
};
