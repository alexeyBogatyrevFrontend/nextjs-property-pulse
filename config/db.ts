import mongoose from 'mongoose'

let connected = false

const connectDB = async (): Promise<void> => {
	mongoose.set('strictQuery', true)

	// if the database is already connected, don't connect again
	if (connected) {
		console.log('MongoDB is already connected')
		return
	}

	// Ensure MONGODB_URL is defined
	const mongoUrl = process.env.MONGODB_URL
	if (!mongoUrl) {
		throw new Error('MONGODB_URL is not defined in the environment variables')
	}

	// Connect to MongoDB
	try {
		await mongoose.connect(mongoUrl)
		connected = true
		console.log('MongoDB connected')
	} catch (error) {
		console.log(error)
	}
}

export default connectDB
