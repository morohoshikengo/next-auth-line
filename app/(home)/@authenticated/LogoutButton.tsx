"use client";

import { signOut } from "next-auth/react";
import { FC } from "react";

export const LoginButtonOut: FC = () => (
  <button onClick={() => signOut()}>ログアウト</button>
);
