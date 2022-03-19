const mongoose = require('mongoose');
const config = require('config');
const db = 'mongodb+srv://aice:1234@cluster0.zrius.mongodb.net/ContactKeeper?retryWrites=true&w=majority'

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});

		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;
