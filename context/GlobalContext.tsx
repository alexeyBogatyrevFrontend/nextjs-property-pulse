'use client'

import { createContext, useContext, useState } from 'react'

// Create context
// @ts-ignore
const GlobalContext = createContext()

// Create a provider
export function GlobalProvider({ children }: any) {
	const [unreadCount, setUnreadCount] = useState(0)

	return (
		<GlobalContext.Provider value={{ unreadCount, setUnreadCount }}>
			{children}
		</GlobalContext.Provider>
	)
}

// Create a custom hook to access context
export function useGlobalContext() {
	return useContext(GlobalContext)
}
