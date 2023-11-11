"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const handleClick = () => {
    if (theme === "light") {
      return setTheme("dark");
    }
    setTheme("light");
  };
  return (
    <Button onClick={handleClick} className="bg-white group dark:bg-darkBlue">
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all text-darkBlue dark:-rotate-90 dark:scale-0 group-hover:text-gray-400 " />
      <MoonIcon className="absolute  h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:text-white  dark:rotate-0 dark:scale-100 dark:group-hover:text-gray-400" />
    </Button>
  );
}
