import { signIn, useSession } from "next-auth/react";

const Home_page = () => {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="text-5xl text-black">
        not logged in
        <button onClick={()=>signIn('google')}>sign <input type="text" /></button>
      </div>
    );
  }
  else
    return (
      <div className="text-5xl">
       logged in as {session?.user?.email}
      </div>
    );
}

export default Home_page;
