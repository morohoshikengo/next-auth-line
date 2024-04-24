import { getServerSession } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";

interface Props {
  authenticated: ReactNode;
  unauthenticated: ReactNode;
  pageProps: any;
}

const HomeLayout: FC<Props> = async ({
  authenticated,
  unauthenticated,
  pageProps,
}) => {
  // optionsはapiで使用したものを使用する
  const session = await getServerSession();

  return <>{session ? authenticated : unauthenticated}</>;
};

export default HomeLayout;
