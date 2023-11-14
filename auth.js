// auth.js

import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Credentials({
      // The name to display on the sign-in form (e.g. 'Sign in with...')
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: {  label: "Password",  type: "password" }
      },
      authorize: async (credentials) => {
        // Add your custom authentication logic here
        const user = { id: 1, name: 'User' } // Replace with your user object
        if (user) {
          return Promise.resolve(user)
        } else {
          return Promise.resolve(null)
        }
      }
    })
  ],
  session: {
    jwt: true,
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session(session, token) {
      session.user.id = token.id
      return session
    },
  },
})
