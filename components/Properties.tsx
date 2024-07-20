'use client'

import { RootType } from '@/types'
import React, { FC, useEffect, useState } from 'react'
import PropertyCard from './PropertyCard'
import { fetchProperties } from '@/utils/requests'
import Spinner from './Spinner'

const Properties = () => {
	const [properties, setProperties] = useState<RootType[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchPropertiesData = async () => {
			try {
				const res = await fetchProperties()

				if (res) {
					setProperties(res)
				}
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}

		fetchPropertiesData()
	}, [])

	// Sort properties by date
	properties.sort(
		(a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
	)

	if (loading) return <Spinner loading={loading} />

	return (
		<section className='px-4 py-6'>
			<div className='container-xl lg:container m-auto px-4 py-6'>
				{properties.length === 0 ? (
					<p>No properties found</p>
				) : (
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						{properties.map((property: RootType) => (
							<PropertyCard key={property._id} property={property} />
						))}
					</div>
				)}
			</div>
		</section>
	)
}

export default Properties
