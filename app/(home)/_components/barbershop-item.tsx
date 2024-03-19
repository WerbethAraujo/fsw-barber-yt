import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Card className="mim-w-[167px] max-w-[167px] rounded-2xl">
      <CardContent className="p-1">
        <div className="relative">
          <Badge
            variant="secondary"
            className="absolute left-0 top-3 z-50 flex items-center gap-2 opacity-90"
          >
            <StarIcon size={12} className="fill-primary text-primary" />
            <span className="text-xs">5,0</span>
          </Badge>
          <Image
            alt="imagem das barbearias recomendadas"
            src={barbershop.imageUrl}
            width={0}
            height={0}
            sizes="100vw"
            className="h-[159px] w-full"
          />
          <h2 className="mt-2 overflow-hidden text-ellipsis text-nowrap font-bold">
            {barbershop.name}
          </h2>
          <p className="overflow-hidden text-ellipsis text-nowrap text-sm text-gray-400">
            {barbershop.address}
          </p>
          <Button className="mt-3 w-full" variant="secondary">
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarbershopItem;
