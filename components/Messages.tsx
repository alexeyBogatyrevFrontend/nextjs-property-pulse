'use client'

import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
import Message from './Message'
import { MessageType } from '@/types'

const Messages = () => {
	const [messages, setMessages] = useState<MessageType[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const getMessages = async () => {
			try {
				const res = await fetch('/api/messages')

				if (res.status === 200) {
					const data = await res.json()

					setMessages(data)
				}
			} catch (error) {
				console.log('Error fetching messages: ', error)
			} finally {
				setLoading(false)
			}
		}

		getMessages()
	}, [])

	if (loading) return <Spinner loading={loading} />

	return (
		<section className='bg-blue-50'>
			<div className='container m-auto py-24 max-w-6xl'>
				<div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
					<h1 className='text-3xl font-bold mb-4'>Your Messages</h1>

					<div className='space-y-4'>
						{messages.length === 0 ? (
							<p>You have no message</p>
						) : (
							messages.map(message => (
								<Message key={message._id} message={message} />
							))
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Messages
