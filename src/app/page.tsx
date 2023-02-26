import Header from "@/components/Header"
import MentatMind from "@/components/MentatMind"
import { getUser } from "@/utils/auth"

export default async function Home() {
  const user = await getUser()

  return (user.email !== 'anonymous'
    // @ts-expect-error Server Component
    ? <MentatMind />
    : <>
      <Header user={user} />
    </>
  )
}
