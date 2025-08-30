import { Switch } from "@/components/ui/switch";

type ActiveSwitchProps = {
  isActive: boolean;
  handleToggle: (name: string) => void;
  name: string;
};

export function ActiveSwitch({
  isActive,
  handleToggle,
  name,
}: ActiveSwitchProps) {
  return (
    <div className="flex items-center space-x-2">
      <Switch
        className="data-[state=unchecked]:pl-0.5 data-[state=checked]:pr-0.5 dark:data-[state=unchecked]:bg-none dark:data-[state=checked]:none"
        checked={isActive}
        onCheckedChange={() => handleToggle(name)}
      />
    </div>
  );
}
