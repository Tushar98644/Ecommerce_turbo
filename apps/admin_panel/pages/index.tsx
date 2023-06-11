import Navbar from "@/components/Navbar"
import { useSession, signIn, signOut } from "next-auth/react"

const Admin_panel = () => {

  const handleLogin = () => {
    signIn('google') // Add the prompt option
  }

  const { data: session } = useSession()
  if (!session) {
    return (
      <div className="flex bg-blue-900 w-screen h-screen items-center justify-center">
        <button className="bg-white px-4 p-2 rounded-lg" onClick={handleLogin}>Login with google</button>
      </div>
    )
  }
  return (
    <>
      <div className="bg-blue-900 h-screen w-screen flex flex-row">
        <Navbar/>
        <div className="bg-white flex-grow m-2 rounded-lg">
          Signed in as {session.user?.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </div>

      </div>

    </>
  );
}

export default Admin_panel;