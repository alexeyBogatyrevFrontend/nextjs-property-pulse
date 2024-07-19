import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/assets/css/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AuthProvider from '@/components/AuthProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { GlobalProvider } from '@/context/GlobalContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<GlobalProvider>
			<AuthProvider>
				<html lang='en'>
					<body className={inter.className}>
						<Navbar />
						<main>{children}</main>
						<Footer />
						<ToastContainer />
					</body>
				</html>
			</AuthProvider>
		</GlobalProvider>
	)
}
