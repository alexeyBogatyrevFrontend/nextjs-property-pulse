import connectDB from '@/config/db'

export const GET = async (request: any) => {
	try {
		await connectDB()

		return new Response(JSON.stringify({ message: 'Hello' }), { status: 200 })
	} catch (error) {
		return new Response('Someting Went Wrong', { status: 500 })
	}
}
