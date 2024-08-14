"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Login() {
  const { data: session } = useSession()
  if (session) {
    return (
        <>
            <button onClick={() => signOut()}>Sign out <img class="profile" src={session.user.image} alt={session.user.name} /></button>
            
      </>
    )
  }
  return (
      <>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}