import { signIn, signOut, useSession } from "next-auth/react";

const Home_page = () => {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="text-5xl text-black">
        not logged in
        <button onClick={() => signIn('google')}>sign <input type="text" /></button>
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
