import NextAuth, { AuthOptions } from 'next-auth';
import LineProvider from 'next-auth/providers/line';

const options: AuthOptions = {
  providers: [
    LineProvider({
      clientId: process.env.LINE_CLIENT_ID ?? '',
      clientSecret: process.env.LINE_CLIENT_SECRET ?? '',
      ...(typeof process.env.LINE_CLIENT_ID === 'string' && typeof process.env.LINE_CLIENT_SECRET === 'string'
        ? {
            authorization: {
              params: {
                scope: "profile openid email",
              }
            }
          }
        : {}),
    }),
  ],
};

const handler = NextAuth(options);

export { handler as GET, handler as POST};
