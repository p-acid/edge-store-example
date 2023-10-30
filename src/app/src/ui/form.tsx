"use client"

import { FormEvent, useRef } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Form = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert(inputRef?.current?.value)
  }

  return (
    <form className="flex gap-2" onSubmit={onSubmit}>
      <Input ref={inputRef} placeholder="Add keyword" />

      <Button type="submit">Submit</Button>
    </form>
  )
}

export default Form
