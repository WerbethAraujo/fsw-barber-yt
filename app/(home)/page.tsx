import { format } from "date-fns";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";
import BookingItem from "../_components/boolking-item";
import { db } from "../_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

export default async function Home() {
  //const que busca as barbearias no prisma
  const barbershops = await db.barbershop.findMany({});

  return (
    <>
      <Header />
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Miguel</h2>
        <p className="text-sm capitalize">
          {format(new Date(), "EEEE',' dd 'de' MMMM", {
            locale: ptBR,
          })}
        </p>

        <div className="mt-6 px-3">
          <Search />
        </div>
        <div className="mt-6 px-3">
          <h2 className="mb-3 px-2 text-sm font-bold uppercase text-gray-400">
            Agendamentos:
          </h2>
          <BookingItem />
        </div>
        <div className="mt-6">
          <h2 className="mb-3 px-5 text-sm font-bold uppercase text-gray-400">
            Recomendados:
          </h2>
          <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {barbershops.map((barbershop) => (
              <div key={barbershop.id} className="min-w-[167px] max-w-[167px]">
                <BarbershopItem key={barbershop.id} barbershop={barbershop} />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-[4.5rem] mt-6">
          <h2 className="mb-3 px-5 text-sm font-bold uppercase text-gray-400">
            Populares:
          </h2>
          <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {barbershops.map((barbershop) => (
              <div key={barbershop.id} className="min-w-[167px] max-w-[167px]">
                <BarbershopItem key={barbershop.id} barbershop={barbershop} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
