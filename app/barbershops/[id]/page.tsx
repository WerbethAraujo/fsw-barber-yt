import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";
// import ServiceItem from "./_components/service-item";

interface BarbeshopDetailspageProps {
  params: {
    id?: string;
  };
}

const BarbeshopDetailsPage = async ({ params }: BarbeshopDetailspageProps) => {
  if (!params.id) {
    return null;
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });

  if (!barbershop) {
    return null;
  }
  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />;
      {/* {barbershop.services.map((service) => (
        <ServiceItem service={service} key={service.id} />
      ))} */}
    </div>
  );
};

export default BarbeshopDetailsPage;
