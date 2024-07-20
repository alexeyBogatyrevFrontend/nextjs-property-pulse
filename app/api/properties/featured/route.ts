import connectDB from '@/config/db'
import Property from '@/models/Property'

// GET /api/properties/featured
export const GET = async (request: any) => {
	try {
		await connectDB()

		const properties = await Property.find({ isFeatured: true })

		return new Response(JSON.stringify(properties), { status: 200 })
	} catch (error) {
		return new Response(`Someting Went Wrong: ${error}`, { status: 500 })
	}
}
