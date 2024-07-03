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

// user
export type GoogleUser = {
	user: User
	expires: string
}

export type User = {
	name: string
	email: string
	image: string
	id: string
}

// add property
export type LocationAddProperty = {
	street: string
	city: string
	state: string
	zipcode: string
}

export type RatesAddProperty = {
	weekly: string
	monthly: string
	nightly: string
}

export type SellerInfoAddProperty = {
	name: string
	email: string
	phone: string
}

export type AddProperty = {
	type: string
	name: string
	description: string
	location: LocationAddProperty
	beds: string
	baths: string
	square_feet: string
	amenities: string[]
	rates: RatesAddProperty
	seller_info: SellerInfoAddProperty
	owner?: string
	images?: string[]
}
