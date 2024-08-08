import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershopItem"
import { quickSearchItems } from "./_constants/quickSearchItems"
import BookingItem from "./_components/bookingItem"

export default async function Home() {
  // chamando os dados do baco

  const barbershops = await db.barbershop.findMany({})

  return (
    <>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Werbeth!</h2>
        <p>Segunda-feira, 05 de Agosto.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input className="outline-none" placeholder="Buscar Barbearia..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="flex items-center gap-3 overflow-x-scroll pt-5 [&::-webkit-scrollbar]:hidden">
          {quickSearchItems.map((item) => (
            <Button className="gap-2" variant="secondary" key={item.title}>
              <Image
                src={item.imageUrl}
                width={16}
                height={16}
                alt="categoria cabelo"
              />
              {item.title}
            </Button>
          ))}
        </div>

        <div className="w-full] relative mt-6 h-[150px]">
          <Image
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
            alt="banner fsw barber"
          />
        </div>

        <BookingItem />

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </>
  )
}
