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
        checked={isActive}
        onCheckedChange={() => handleToggle(name)}
        id="airplane-mode"
      />
    </div>
  );
}
