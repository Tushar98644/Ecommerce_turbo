import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Dashboard = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <Layout >
      <div className="text-blue-900 flex gap-2 justify-between p-4">
        <h2>Hello, <b>{session?.user?.name}</b></h2>
        <div className="flex gap-1">
          <Image src={session?.user?.image} alt='image' width={100} height={100} />
          {session?.user?.name}
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;