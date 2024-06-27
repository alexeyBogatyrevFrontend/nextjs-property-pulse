'use client'

import { SessionProvider } from 'next-auth/react'
import React, { FC } from 'react'

type AuthProviderType = {
	children: any
}

const AuthProvider: FC<AuthProviderType> = ({ children }) => {
	return <SessionProvider>{children}</SessionProvider>
}

export default AuthProvider
