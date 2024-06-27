// property
export type RootType = {
	_id: string
	owner: string
	name: string
	type: string
	description: string
	location: Location
	beds: number
	baths: number
	square_feet: number
	amenities: string[]
	rates: Rates
	seller_info: Sellerinfo
	images: string[]
	isFeatured: boolean
	createdAt: string
	updatedAt: string
}

export type Sellerinfo = {
	name: string
	email: string
	phone: string
}

export type Rates = {
	weekly: number
	monthly?: number
	nightly?: number
}

export type Location = {
	street: string
	city: string
	state: string
	zipcode: string
}

// google auth
export type RootGoogleType = {
	google: Google
}

export type Google = {
	id: string
	name: string
	type: string
	signinUrl: string
	callbackUrl: string
}
