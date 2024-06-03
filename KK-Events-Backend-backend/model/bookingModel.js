import mongoose from 'mongoose';

const bookNowSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    event: String,
    location: String,

});

const bookNow = mongoose.model('booking', bookNowSchema);

export default bookNow;
