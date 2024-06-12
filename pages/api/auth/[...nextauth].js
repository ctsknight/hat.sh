import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak"
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    KeycloakProvider({
	          clientId: process.env.KEYCLOAK_ID,
	          clientSecret: process.env.KEYCLOAK_SECRET,
	          issuer: process.env.KEYCLOAK_ISSUER,
	        }),
    GitHubProvider({
	        clientId: process.env.GITHUB_ID,
	        clientSecret: process.env.GITHUB_SECRET
	      })
  ]
}

export default NextAuth(authOptions)
