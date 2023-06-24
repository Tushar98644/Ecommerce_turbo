import { signIn, signOut, useSession } from "next-auth/react";

const Home_page = () => {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="min-h-screen bg-blue-600 flex justify-center items-center">
        <div className="bg-white text-black p-4 rounded-xl pr-12 pl-12 text-lg font-regular border">
          <button onClick={() => signIn('google')}>Login with Google</button>
        </div>
      </div>
    );
  }

  return (
    <div className="text-5xl">
      logged in as {session?.user?.email}
      <button onClick={() => signOut()}>sign out</button>
    </div>
  );
}

export default Home_page;
