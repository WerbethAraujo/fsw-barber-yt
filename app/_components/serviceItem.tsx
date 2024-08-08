import { BarbershopService } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"

interface ServiceItemItemProps {
  service: BarbershopService
}

const ServiceItem = ({ service }: ServiceItemItemProps) => {
  return (
    <Card>
      <CardContent className="flex items-center gap-3 p-3">
        <div className="relative max-h-[110px] min-h-[110px] min-w-[110px] max-w-[110px]">
          <Image
            src={service.imageUrl}
            fill
            alt="image service"
            className="rounded-lg object-cover"
          />
        </div>
        <div className="space-y-3">
          <h2 className="text-sm font-semibold">{service.name}</h2>
          <p className="text-sm text-gray-400">{service.description}</p>

          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-primary">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(service.price))}
            </p>
            <Button variant="secondary" size="sm">
              reservar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ServiceItem
