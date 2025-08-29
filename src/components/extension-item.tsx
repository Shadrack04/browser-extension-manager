import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ActiveSwitch } from "./active-switch";

type ExtensionItemProps = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
  handleToggle: (name: string) => void;
  handleRemove: (name: string) => void;
};

export default function ExtensionItem({
  logo,
  name,
  description,
  isActive,
  handleToggle,
  handleRemove,
}: ExtensionItemProps) {
  return (
    <Card className="w-full max-w-sm py-3 px-3 gap-8">
      <CardContent className=" p-0 flex items-center justify-center gap-3">
        <img src={logo} alt="" />
        <div className=" flex flex-col ">
          <h2 className=" text-xl text-primary-text font-bold">{name}</h2>
          <p className=" text-muted-text">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between w-full p-0">
        <Button
          asChild
          variant={"outline"}
          className=" bg-transparent border-ring text-primary-text rounded-full text-md"
        >
          <button onClick={() => handleRemove(name)}>Remove</button>
        </Button>
        <ActiveSwitch
          isActive={isActive}
          name={name}
          handleToggle={handleToggle}
        />
      </CardFooter>
    </Card>
  );
}
