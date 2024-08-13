import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog"
import { DialogHeader } from "./ui/dialog"
import { Button } from "./ui/button"
import Image from "next/image"
import { signIn } from "next-auth/react"

const SignInDialog = () => {
  const handleLoginWithGoogle = async () => {
    await signIn("google")
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>Faça seu login</DialogTitle>
        <DialogDescription>
          Conecte-se usando sua conta Google.
        </DialogDescription>
      </DialogHeader>
      <Button
        variant="outline"
        className="gap-2 font-bold"
        onClick={handleLoginWithGoogle}
      >
        <Image src="/google.svg" width={18} height={18} alt="logo google" />
        Google
      </Button>
    </>
  )
}

export default SignInDialog
