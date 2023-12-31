import { trpc } from "@web/app/trpc";
import ClientSide from "./ClientSide";

export default async function Home() {
  const { greeting } = await trpc.getUsers.query({ name: `Tom` });
  return (
    <>
      <div>{greeting}</div>
      <ClientSide />
    </>
  );
}
