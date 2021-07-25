const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    tasks: [{ type: Schema.Types.ObjectId, ref: 'Tasks' }],
    role: {type: String, required: true},
    isLogedIn: {type: Boolean, required: true, default: false}
}, {
    timestamps: true
}
);

UserSchema.methods.toJSON = function () {
    var user = this.toObject();
    delete user.password;
    return user;
}

module.exports = model('User', UserSchema);