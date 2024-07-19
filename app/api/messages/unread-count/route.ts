import connectDB from '@/config/db'
import Message from '@/models/Message'
import { getSessionUser } from '@/utils/getSessionUser'

export const dynamic = 'force-dynamic'

// GEt /api/messages/unread-count
export const GET = async () => {
	try {
		await connectDB()

		const sessionUser = await getSessionUser()

		if (!sessionUser || !sessionUser.user) {
			return new Response('User ID is required', { status: 401 })
		}

		const { userId } = sessionUser

		const unreadMessageCount = await Message.countDocuments({
			recipient: userId,
			read: false,
		})

		return new Response(JSON.stringify({ count: unreadMessageCount }), {
			status: 200,
		})
	} catch (error) {}
}
