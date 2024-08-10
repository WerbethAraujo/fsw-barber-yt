import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import Link from "next/link"
import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react"
import { quickSearchItems } from "../_constants/quickSearchItems"
import Image from "next/image"

const SidebarSheet = () => {
  return (
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
  )
}

export default SidebarSheet
