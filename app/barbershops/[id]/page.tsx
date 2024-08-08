import ServiceItem from "@/app/_components/serviceItem"
import { Button } from "@/app/_components/ui/button"
import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BarbershopPageProps {
  params: {
    id: string
  }
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  })

  if (!barbershop) {
    return notFound()
  }
  return (
    <div>
      <div className="relative h-[250px] w-full">
        <Image
          src={barbershop?.imageUrl}
          fill
          alt="image barbershop"
          className="object-cover"
        />
        <Button
          variant="secondary"
          size="icon"
          className="absolute left-4 top-4"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="absolute right-4 top-4"
        >
          <MenuIcon />
        </Button>
      </div>

      <div className="boder-solid border-b p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop?.name}</h1>
        <div className="mb-2 flex items-center gap-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop?.address}</p>
        </div>
        <div className="mb-2 flex items-center gap-2">
          <StarIcon className="fill-primary text-primary" size={18} />
          <p className="text-sm">4,8 (389 avaliações)</p>
        </div>
      </div>
      <div className="boder-solid space-y-2 border-b p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">Sobre nós</h2>
        <p className="text-sm">{barbershop?.description}</p>
      </div>
      <div className="space-y-3 p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">Serviços</h2>
        <div className="space-y-3">
          {barbershop.services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BarbershopPage
