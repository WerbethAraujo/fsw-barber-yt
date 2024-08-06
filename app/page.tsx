import { Button } from "./_components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="mb-5 text-[36px] uppercase text-purple-500">Homepage</h1>
      <Button>Iniciar</Button>
    </main>
  )
}
