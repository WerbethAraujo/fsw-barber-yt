"use client"

import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import Link from "next/link"
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"
import { quickSearchItems } from "../_constants/quickSearchItems"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { signOut, useSession } from "next-auth/react"
import SignInDialog from "./sinInDialog"

const SidebarSheet = () => {
  const { data } = useSession()

  const handleLogoutClick = () => {
    signOut()
  }

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>
      <h2>Ola, Faça o seu login</h2>

      <div className="flex items-center justify-between gap-3 border-b border-solid p-5">
        {data?.user ? (
          <div className="flex items-center gap-2">
            <Avatar className="flex justify-start gap-2">
              <AvatarImage src={data?.user?.image ?? ""} />
            </Avatar>
            <div>
              <p className="font-semibold">{data.user.name}</p>
              <p className="text-xs">{data.user.email}</p>
            </div>
          </div>
        ) : (
          <>
            <h2 className="font-bold">Olá, faça seu login</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="icon">
                  <LogInIcon size={18} />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[90%] rounded-md">
                <SignInDialog />
              </DialogContent>
            </Dialog>
          </>
        )}
      </div>
      <div className="flex flex-col gap-2 border-b border-solid p-5">
        <SheetClose asChild>
          <Button className="flex justify-start gap-2" asChild>
            <Link href="/">
              <HomeIcon size="18" />
              Inicio
            </Link>
          </Button>
        </SheetClose>
        <Button asChild variant="ghost" className="flex justify-start gap-2">
          <Link href="/bookings">
            <CalendarIcon size="18" />
            Agendamentos
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid p-5">
        {quickSearchItems.map((item) => (
          <SheetClose asChild key={item.title}>
            <Button
              variant="ghost"
              className="flex justify-start gap-2"
              asChild
            >
              <Link href={`/barbershops?service=${item.title}`}>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={18}
                  height={18}
                />
                {item.title}
              </Link>
            </Button>
          </SheetClose>
        ))}
      </div>
      {data?.user && (
        <div className="flex flex-col gap-2 p-5">
          <Button
            variant="ghost"
            className="justify-start gap-2"
            onClick={handleLogoutClick}
          >
            <LogOutIcon size={18} />
            Sair
          </Button>
        </div>
      )}
    </SheetContent>
  )
}

export default SidebarSheet
