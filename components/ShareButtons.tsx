import { RootType } from '@/types'
import React, { FC } from 'react'
import { FaShare } from 'react-icons/fa'
import {
	EmailIcon,
	EmailShareButton,
	FacebookIcon,
	FacebookShareButton,
	TelegramIcon,
	TelegramShareButton,
	TwitterIcon,
	TwitterShareButton,
	WhatsappIcon,
	WhatsappShareButton,
} from 'react-share'

type ShareButtonsType = {
	property: RootType
}

const ShareButtons: FC<ShareButtonsType> = ({ property }) => {
	const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/properties/${property._id}`

	return (
		<>
			<h3 className='text-xl font-bold text-center pt-2'>
				Share this property
			</h3>
			<div className='flex gap-3 justify-center pb-5'>
				<TelegramShareButton url={shareUrl} title={property.name}>
					<TelegramIcon size={40} round={true} />
				</TelegramShareButton>

				<WhatsappShareButton
					url={shareUrl}
					title={property.name}
					separator=':: '
				>
					<WhatsappIcon size={40} round={true} />
				</WhatsappShareButton>

				<EmailShareButton
					url={shareUrl}
					subject={property.name}
					body={`Check out this property listing: ${shareUrl}`}
				>
					<EmailIcon size={40} round={true} />
				</EmailShareButton>
			</div>
		</>
	)
}

export default ShareButtons
