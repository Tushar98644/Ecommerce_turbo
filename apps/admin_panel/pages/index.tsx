import { useSession } from "next-auth/react";

const Home_page = () => {
  const { data: session } = useSession();
  if (!session) {
    return <div className="text-5xl text-black">
        loading...
      </div> 
  }
  else
    return (
      <div className="text-5xl">
        hoem_page is it
      </div>
    );
}

export default Home_page;