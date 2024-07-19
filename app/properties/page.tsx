import React from 'react'

import PropertyCard from '@/components/PropertyCard'
import { RootType } from '@/types'
import { fetchProperties } from '@/utils/requests'
import PropertySearchForm from '@/components/PropertySearchForm'

const PropertiesPage = async () => {
	const properties: RootType[] = await fetchProperties()

	// Sort properties by date
	properties.sort(
		(a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
	)

	return (
		<>
			<section className='bg-blue-700 py-4'>
				<div className='max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8'>
					<PropertySearchForm />
				</div>
			</section>
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
		</>
	)
}

export default PropertiesPage
