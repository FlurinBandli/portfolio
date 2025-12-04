import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import nextPackage from "next/package.json";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import { Info } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const SystemInfoSheet = async () => {
  const session = (await auth()) as { provider?: string; expires?: string } | null | undefined;
  const nextVersion = nextPackage.version;
  const nodeVersion = process.version;

  const authProvider = session?.provider;
  const expiresIn = session?.expires
    ? Math.max(0, Math.floor((new Date(session.expires).getTime() - new Date().getTime()) / 60000))
    : undefined;

  return (
    <Sheet>
      <Tooltip>
        <TooltipTrigger asChild>
          <SheetTrigger asChild>
            <Button>
              <Info />
            </Button>
          </SheetTrigger>
        </TooltipTrigger>
        <TooltipContent>System Info</TooltipContent>
      </Tooltip>

      <SheetContent className="p-4">
        <SheetHeader>
          <SheetTitle>System Info</SheetTitle>
          <SheetDescription>Details about the system status and configuration.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col pl-4 gap-2">
          <p>Next.js version: {nextVersion}</p>
          <p>Node.js version: {nodeVersion}</p>
          <p>Authentication Provider: {authProvider}</p>
          <p>Session expires in: {expiresIn} minutes</p>
        </div>

        <SheetFooter>
          <SheetClose>Close</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SystemInfoSheet;
