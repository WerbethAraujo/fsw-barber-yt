import { Barbershop } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { StarIcon } from "lucide-react"

interface BarbershopItemProps {
  barbershop: Barbershop
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Card className="mim-w-[167px] rounded-2xl">
      <CardContent className="p-0 px-1 pt-1">
        <div className="relative h-[159px] w-[167x]">
          <Image
            src={barbershop.imageUrl}
            fill
            className="rounded-2xl object-cover"
            alt={barbershop.name}
          />
          <Badge
            className="absolute left-2 top-2 flex items-center justify-center space-x-1"
            variant="secondary"
          >
            <StarIcon size={12} className="fill-primary text-primary" />
            <span className="text-xs font-semibold">5.0</span>
          </Badge>
        </div>
        <div className="py-3">
          <h3 className="truncate font-semibold">{barbershop.name}</h3>
          <p className="truncate text-sm text-gray-400">{barbershop.address}</p>
          <Button variant="secondary" className="mt-3 w-full">
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarbershopItem
