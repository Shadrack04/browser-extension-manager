import { Switch } from "@/components/ui/switch";

type ActiveSwitchProps = {
  isActive: boolean;
};

export function ActiveSwitch({ isActive }: ActiveSwitchProps) {
  return (
    <div className="flex items-center space-x-2">
      <Switch checked={isActive} id="airplane-mode" />
    </div>
  );
}
