'use client'

import { useParams } from 'next/navigation'
import React from 'react'

const PropertiesPage = () => {
	const { id } = useParams()

	return (
		<div>
			<h1>Properties page {id}</h1>
		</div>
	)
}

export default PropertiesPage
