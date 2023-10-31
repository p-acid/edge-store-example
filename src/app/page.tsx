import { Separator } from "@/components/ui/separator"

import ThemeButtons from "./src/ui/theme-buttons"
import UploadForm from "./src/ui/upload-form"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-zinc-50 transition-colors dark:bg-zinc-900">
      <h1 className="text-5xl font-bold tracking-tight text-zinc-800 transition-colors dark:text-zinc-300">
        You can upload Anything! 📦
      </h1>

      <Separator />

      <ThemeButtons />

      <section className="flex w-full justify-center">
        <UploadForm />
      </section>
    </main>
  )
}
