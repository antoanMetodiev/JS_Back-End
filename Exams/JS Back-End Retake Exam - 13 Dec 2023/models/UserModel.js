const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

// Точно преди да се изпълни save-a, се изпълнява тази функция:
// UserSchema.pre('save', async function() {

//     this.password = await bcrypt.genSalt(await bcrypt.hash(this.password, 12));
// });

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;