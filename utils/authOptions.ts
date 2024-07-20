import connectDB from '@/config/db'
import User from '@/models/User'
import GoogleProvider from 'next-auth/providers/google'
import { signIn } from 'next-auth/react'

export const authOptions = {
	providers: [
		GoogleProvider({
			// @ts-ignore
			clientId: process.env.GOOGLE_CLIENT_ID,
			// @ts-ignore
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			authorization: {
				params: {
					prompt: 'consent',
					access_type: 'offline',
					response_type: 'code',
				},
			},
		}),
	],
	callbacks: {
		// Invoked on successful sign in
		async signIn({ profile }: any) {
			// 1. Connect to database
			await connectDB()
			// 2. Check if user exists
			const userExists = await User.findOne({ email: profile.email })
			// 3. If not, then add user to database
			if (!userExists) {
				// Truncate user name if too long
				const username = profile.name.slice(0, 20)

				await User.create({
					email: profile.email,
					username,
					image: profile.picture,
				})
			}
			// 4. Return true to allow sign in
			return true
		},
		// Modifies the session object
		async session({ session }: any) {
			// 1. Get user from database
			const user = await User.findOne({ email: session.user.email })
			// 2. Assign the user id to the session
			session.user.id = user._id.toString()
			// 3. Return session
			return session
		},
	},
}
