"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

const ThemeButtons = () => {
  const { setTheme } = useTheme()

  return (
    <div className="flex gap-2">
      <Button size="icon" variant="outline" onClick={() => setTheme("light")}>
        <SunIcon />
      </Button>

      <Button size="icon" onClick={() => setTheme("dark")}>
        <MoonIcon />
      </Button>
    </div>
  )
}

export default ThemeButtons
