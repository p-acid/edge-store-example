"use client"

import { ChangeEvent, useState } from "react"

import { Label } from "@radix-ui/react-label"

import { useEdgeStore } from "@/lib/edge-store"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/components/ui/use-toast"

const UploadForm = () => {
  const [file, setFile] = useState<File>()
  const [uploadedUrl, setUploadedUrl] = useState<string>()
  const [temporaryUrl, setTemporaryUrl] = useState<string | null>(null)
  const [progress, setProgress] = useState<number | null>(null)

  const { toast } = useToast()
  const { edgestore } = useEdgeStore()

  const onProgressChange = (progress: number) => {
    if (progress < 100) {
      setProgress(progress)
    } else {
      setProgress(null)
    }
  }

  const toastNoFiles = () => {
    toast({ title: "There are no files" })
  }

  const onUploadFailed = () => {
    toast({
      title: "Upload Failed.",
    })
  }

  const onSave = (event: ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0])
  }

  const onUpload = async () => {
    if (file) {
      try {
        const res = await edgestore.publicFiles.upload({
          file,
          options: {
            replaceTargetUrl: uploadedUrl,
          },
          onProgressChange,
        })

        setUploadedUrl(res.url)

        toast({
          title: "Upload Successed.",
          description: `Filename: ${file.name}`,
        })
      } catch (err) {
        onUploadFailed()
      }
    } else {
      toastNoFiles()
    }
  }

  const onTemporaryUpload = async () => {
    if (file) {
      try {
        const res = await edgestore.publicFiles.upload({
          file,
          options: {
            replaceTargetUrl: uploadedUrl,
            temporary: true,
          },
          onProgressChange,
        })

        setTemporaryUrl(res.url)

        toast({
          title: "File Uploaded Temporary.",
          description: `To confirm the upload, click the "Confirm Upload" button`,
        })
      } catch (err) {
        onUploadFailed()
      }
    } else {
      toastNoFiles()
    }
  }

  const onConfirmUpload = async () => {
    if (!!temporaryUrl) {
      await edgestore.publicFiles.confirmUpload({
        url: temporaryUrl,
      })

      toast({
        title: "File upload has been confirmed.",
      })

      setTemporaryUrl(null)
    } else {
      toast({
        title: "File upload has been confirmed.",
      })
    }
  }

  return (
    <div className="grid w-[400px] gap-2">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="picture">Picture</Label>
        <Input id="picture" type="file" onChange={onSave} />
      </div>

      {typeof progress === "number" && <Progress value={progress} />}

      {temporaryUrl ? (
        <Button onClick={onConfirmUpload}>Confirm Upload</Button>
      ) : (
        <Button variant="outline" onClick={onTemporaryUpload}>
          Temporary Upload
        </Button>
      )}
      <Button onClick={onUpload}>Upload</Button>
    </div>
  )
}

export default UploadForm
