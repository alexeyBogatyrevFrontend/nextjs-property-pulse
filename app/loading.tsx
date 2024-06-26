'use client'

import React, { FC } from 'react'
import { ClipLoader } from 'react-spinners'

type LoadingPageType = {
	loading: any
}

const override = {
	display: 'block',
	margin: '100px auto',
}

const LoadingPage: FC<LoadingPageType> = ({ loading }) => {
	return (
		<ClipLoader
			color='#3b82f6'
			loading={loading}
			cssOverride={override}
			size={150}
			aria-label='Loading Spinner'
		/>
	)
}

export default LoadingPage
