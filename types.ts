export type DataType = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}[];

export type ContextValueType = {
  filterParam: string;
  data: DataType;
  handleRemove: (name: string) => void;
  handleToggle: (name: string) => void;
  handleFilter: (name: string) => void;
};
