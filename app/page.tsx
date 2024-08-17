import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import Image from "next/image"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershopItem"
import { quickSearchItems } from "./_constants/quickSearchItems"
import BookingItem from "./_components/bookingItem"
import Search from "./_components/search"
import Link from "next/link"
import { getServerSession } from "next-auth"
import { authOptions } from "./_lib/auth"

export default async function Home() {
  const session = await getServerSession(authOptions)
  const barbershops = await db.barbershop.findMany({})

  const confirmadBookings = session?.user
    ? await db.booking.findMany({
        where: {
          userId: (session.user as any).id,
          date: {
            gte: new Date(),
          },
        },
        include: {
          service: {
            include: {
              barbershop: true,
            },
          },
        },
        orderBy: {
          date: "asc",
        },
      })
    : []

  return (
    <>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Anthony!</h2>
        <p>Segunda-feira, 05 de Agosto.</p>
        <div className="mt-6">
          <Search />
        </div>

        <div className="flex items-center gap-3 overflow-x-scroll pt-5 [&::-webkit-scrollbar]:hidden">
          {quickSearchItems.map((item) => (
            <Button
              className="flex gap-2"
              variant="secondary"
              key={item.title}
              asChild
            >
              <Link href={`/barbershops?service=${item.title}`}>
                <Image
                  src={item.imageUrl}
                  width={16}
                  height={16}
                  alt="categoria cabelo"
                />
                {item.title}
              </Link>
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
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <div className="flex w-full gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {confirmadBookings.map((booking) => (
            <BookingItem key={booking.id} booking={booking} />
          ))}
        </div>

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
