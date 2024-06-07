import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    KeycloakProvider
  ]
}

export default NextAuth(authOptions)