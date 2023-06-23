import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from "./Navbar"

const Layout = ({children}) => {
    const handleLogin = () => {
        signIn('google') // Add the prompt option
    }
    const { data: session } = useSession();
    if (!session) {
        return (
            <div className="flex bg-blue-900 w-screen h-screen items-center justify-center">
                <button className="bg-white px-4 p-2 rounded-lg" onClick={handleLogin}>Login with google</button>
            </div>
        )
    }
    return (
        <div className="bg-blue-900 h-screen w-screen flex flex-row">
            <Navbar />
            <div className="bg-white flex-grow m-2 rounded-lg">
                <div className="m-4">
                {children}
                </div>
            </div>
        </div>

    );
}

export default Layout;