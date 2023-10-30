import { Separator } from "@/components/ui/separator"

import Form from "./src/ui/form"
import ThemeButtons from "./src/ui/theme-buttons"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-zinc-50 transition-colors dark:bg-zinc-900">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-5xl font-bold tracking-tight text-zinc-800 transition-colors dark:text-zinc-300">
          Make Awesome Project 🚀
        </h1>

        <p className="text-xl font-light tracking-tight text-zinc-800 transition-colors dark:text-zinc-200">
          with this template
        </p>
      </div>

      <Separator />

      <ThemeButtons />

      <section className="w-[600px]">
        <Form />
      </section>
    </main>
  )
}
