import type React from "react";
import { BellRing, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Eleve } from "@/types/students";

export default function StudentNotes({  }: { eleve: Eleve }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bulletin de notes</CardTitle>
        <CardDescription>Année scolaire</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-sans leading-none">Push Notifications</p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
        </div>
        <div>
          
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check /> Imprimer
        </Button>
      </CardFooter>

      
    </Card>
  );
}
