import { getServerSession } from "next-auth";
import { FC, ReactNode } from "react";
import { LoginButtonOut } from "./LogoutButton";

interface Props {
  authenticated: ReactNode;
  unauthenticated: ReactNode;
}

const Page: FC<Props> = async ({ authenticated, unauthenticated }) => {
  const session = await getServerSession();
  console.log(session);
  return (
    <>
      <p>ログイン後</p>
      <LoginButtonOut />
    </>
  );
};

export default Page;
