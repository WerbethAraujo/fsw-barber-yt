"use client"

import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import {
  CalendarIcon,
  HomeIcon,
  LogOut,
  LogOutIcon,
  MenuIcon,
} from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { quickSearchItems } from "../_constants/quickSearchItems"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-5">
        <Image src="/logo.svg" width={120} height={18} alt="logo fsw barber" />
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="flex items-center gap-3 border-b border-solid p-5">
              <Avatar className="flex justify-start gap-2">
                <AvatarImage src="/avatar.jpg" />
              </Avatar>
              <div>
                <p className="font-semibold">Anthony Gabriel</p>
                <p className="text-xs">anthonygabriel@gmail.com</p>
              </div>
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
              <Button variant="ghost" className="flex justify-start gap-2">
                <CalendarIcon size="18" />
                Agendamentos
              </Button>
            </div>

            <div className="flex flex-col gap-2 border-b border-solid p-5">
              {quickSearchItems.map((item) => (
                <Button
                  key={item.title}
                  variant="ghost"
                  className="flex justify-start gap-2"
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={18}
                    height={18}
                  />
                  {item.title}
                </Button>
              ))}
            </div>
            <div className="flex flex-col gap-2 p-5">
              <Button variant="ghost" className="justify-start gap-2">
                <LogOutIcon size={18} />
                Sair
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
