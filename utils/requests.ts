const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null

// Fetch all properties
export const fetchProperties = async () => {
	try {
		// Handle the keys where the domain is not available yet
		if (!apiDomain) return []

		const res = await fetch(`${apiDomain}/properties`, { cache: 'no-store' })

		if (!res.ok) {
			throw new Error('Failed to fetch data')
		}

		return res.json()
	} catch (error) {
		console.log(error)
		return []
	}
}

export const fetchFeaturedProperties = async () => {
	try {
		// Handle the keys where the domain is not available yet
		if (!apiDomain) return []

		const res = await fetch(`${apiDomain}/properties/featured`, {
			cache: 'no-store',
		})

		if (!res.ok) {
			throw new Error('Failed to fetch data')
		}

		return res.json()
	} catch (error) {
		console.log(error)
		return []
	}
}

// Fetch single property
export const fetchProperty = async (id: string) => {
	try {
		// Handle the keys where the domain is not available yet
		if (!apiDomain) return null

		const res = await fetch(`${apiDomain}/properties/${id}`)

		if (!res.ok) {
			throw new Error('Failed to fetch data')
		}

		return res.json()
	} catch (error) {
		console.log(error)
		return null
	}
}
