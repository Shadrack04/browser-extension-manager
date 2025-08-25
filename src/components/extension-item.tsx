import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ActiveSwitch } from "./active-switch";

export default function ExtensionItem() {
  return (
    <Card className="w-full max-w-sm p-2 gap-8">
      <CardContent className=" p-0 flex items-center justify-center gap-3">
        <img src="public/assets/svg/logo-devlens.svg" alt="" />
        <div className=" flex flex-col ">
          <h2>DevLens</h2>
          <p>Quickly inspect page layouts and visualize element boundaries.</p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between w-full p-0">
        <Button>Remove</Button>
        <ActiveSwitch />
      </CardFooter>
    </Card>
  );
}
